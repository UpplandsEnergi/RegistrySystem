import { useContext } from 'react'
import { Context } from '../appContext'
import { MatchType } from './searchBox'
import SearchBoxMessageHolder from './searchBoxMessageHolder'
import SearchBoxDisplay from './searchBoxDisplay'
import styles from '../../styles/searchBox.module.css'
import '../../@types/@searchBoxTypes'

/**
 * @param {{
 *     label: string,
 *     state: SearchBoxState,
 *     setState: import('react').Dispatch<SearchBoxState>,
 *     parentState: ?SearchBoxState,
 *     onlyShowContent: boolean
 * }}
 * @returns {JSX.Element}
 */
const SearchBoxContent = ({ label, state, setState, parentState = null, onlyShowContent = false }) => 
{
    const { data } = useContext(Context);

    const cmp = (a, b) => String(a).toLowerCase() === String(b).toLowerCase()

    const findPerson = (pid) => {
        return Object.values(data.file)
            .filter((row) => cmp(row["Org/Pnr"], pid) || cmp(row["Kund ID"], pid))
    }

    const matchApiCall = async (pid) => {
        try 
        {
            let match = findPerson(pid)
            
            if (match && match[0]) {
                let knr = match[0]['Kund ID'];
                if (parentState && parentState?.match?.value && cmp(knr, parentState.match.value['Kund ID'])) {
                    setState({ 
                        ...state, 
                        match: {  
                            type: MatchType.MatchingAdditional,
                            value: null,
                            check: false
                        }
                    })
                }
                else
                {
                    let response = await fetch('api/database/check', { 
                        method: "PUT", 
                        body: JSON.stringify({ knr: knr })
                    });
                    let responseValue = await response?.json();
                    setState({ 
                        ...state, 
                        match: {
                            type: responseValue.success && !responseValue.result 
                                ? MatchType.Success 
                                : MatchType.Registered,
                            value: match[0],
                            check: false
                        }
                    });
                }
            }
            else {
                setState({ 
                    ...state, 
                    match: {  
                        type: MatchType.Fail,
                        value: null,
                        check: false
                    }
                });
            }
        } 
        catch (error) {
            console.error(error)
            setState({ 
                ...state, 
                match: {  
                    type: MatchType.Fail,
                    value: null,
                    check: false
                }
            })
        }
    }

    const getContent = (type) => {
        switch (type)
        {
            case MatchType.Success:
                return (
                    <SearchBoxDisplay 
                        state={state} 
                        setState={setState} 
                        onlyShowContent={onlyShowContent}
                    />
                );

            case MatchType.Fail:
                return <SearchBoxMessageHolder text="Matchar ingen kund"/>;

            case MatchType.Registered:
                return <SearchBoxMessageHolder text="Personen är redan registrerad"/>;

            case MatchType.DatabaseError:
                return <SearchBoxMessageHolder text="Misslyckades registrera"/>;

            case MatchType.Done:
                return <SearchBoxMessageHolder text="Personen är nu registrerad"/>;

            case MatchType.MatchingAdditional:
                return <SearchBoxMessageHolder text="Medföljare kan inte vara samma"/>;

            default:
                return null;
        }
    }

    return (
        <div className={styles.searchBoxContent}>
            <div className={styles.searchBoxContentRow}>
                <div className={styles.searchBoxPrompt}> 
                    { label } 
                </div>
                <input
                    className={styles.searchBoxInput}
                    value={state.search} 
                    onChange={(e) => setState({ ...state, search: e.target.value })}
                />
                <button
                    className={styles.searchBoxInputButton}
                    onClick={() => matchApiCall(state.search)}
                >
                    {data.text.searchButtonText}
                </button>
            </div>
            { getContent(state.match.type) }
        </div> 
    )
}

export default SearchBoxContent;