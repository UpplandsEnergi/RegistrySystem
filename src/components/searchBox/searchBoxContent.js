import { useContext } from 'react'
import { Context } from '../appContext'
import { AdditionalType, MatchType } from './searchBox'
import SearchBoxMessageHolder from './searchBoxMessageHolder'
import SearchBarRow from './searchBarRow'
import styles from '../../styles/searchBox.module.css'
import '../../@types/@searchBoxTypes'

/**
 * @param {{
 *     label: string,
 *     state: SearchBoxState,
 *     setState: import('react').Dispatch<SearchBoxState>,
 *     knrKey: string,
 *     pnrKey: string,
 *     isAdditional: boolean
 * }}
 * @returns {JSX.Element}
 */
const SearchBoxContent = ({ label, state, setState, knrKey, pnrKey, isAdditional = false }) => 
{
    const { data } = useContext(Context);

    let localState = isAdditional ? state.additional : state;
    let setLocalState = isAdditional ? (value) => setState({ ...state, additional: value }) : setState;

    const cmp = (a, b) => String(a).toLowerCase() === String(b).toLowerCase()

    const findPerson = (pid) => {
        return Object.values(data.file)
            .filter((row) => cmp(row[pnrKey], pid) || cmp(row[knrKey], pid))
    }

    const matchApiCall = async () => {
        let result = { 
            ...localState,
            match: {
                ...localState.match,
                type:  MatchType.Fail,
                value: null
            }
        }

        if (!isAdditional){
            result.another = false;
            result.additional = {
                type: AdditionalType.None,
                match: { type: MatchType.None, value: null },
                search: ""
            }
        }

        try {
            let match = findPerson(localState.search)
            
            if (match && match[0]) {
                let knr = match[0][knrKey]
                let response = await fetch('api/database/check', { 
                    method: "PUT", 
                    body: JSON.stringify({ knr: knr, checkProxy: isAdditional })
                });
                let value = await response?.json();

                if (isAdditional && cmp(knr, state.match.value[knrKey]))
                {
                    result.match.type = MatchType.MatchingAdditional
                }
                else
                {
                    result.match.type = value.success && !value.result 
                        ? MatchType.Success 
                        : MatchType.Registered;
                    result.match.value = match[0];
                }
            }
        } 
        catch (error) {
            console.error(error)
        }
        finally {
            setLocalState(result);
        }
    }

    const getContent = (type) => {
        switch (type)
        {
            case MatchType.Success:
                return null;

            case MatchType.Fail:
                return <SearchBoxMessageHolder text={data.text.messageFail}/>;

            case MatchType.Registered:
                return <SearchBoxMessageHolder text={data.text.messageRegistered}/>;

            case MatchType.DatabaseError:
                return <SearchBoxMessageHolder text={data.text.messageDatabaseError}/>;

            case MatchType.Done:
                return <SearchBoxMessageHolder text={data.text.messageDone}/>;

            case MatchType.MatchingAdditional:
                return <SearchBoxMessageHolder text={data.text.messageMatchingAdditional}/>;

            default:
                return null;
        }
    }

    return (
        <div className={styles.searchBoxContent}>
            <SearchBarRow
                text={localState.search}
                setText={(value) => setLocalState({ ...localState, search: value })}
                onClick={() => matchApiCall().catch(console.error())}
                label={label}
            />
            { getContent(localState.match.type) }
        </div>
    )
}

export default SearchBoxContent;