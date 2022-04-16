import { useContext } from 'react'
import { Context } from '../appContext'
import SearchBoxCheckboxRow from './searchBoxCheckboxRow'
import { AdditionalType, MatchType } from './searchBox'
import styles from '../../styles/searchBox.module.css'

/**
 * 
 * @param {{
 *     state: SearchBoxState,
 *     setState: import('react').Dispatch<SearchBoxState>,
 *     knrKey: string
 * }} 
 * @returns {JSX.Element}
 */
const SearchBoxRegisterRow = ({ state, setState, knrKey }) => {
    const { data } = useContext(Context);

    const registerUser = async () => {
        let result = { ...state, 
            match: {
                ...state.match,
                type:  MatchType.DatabaseError,
                value: null
            },
            another: false,
            additional: {
                type: AdditionalType.None,
                match: { type: MatchType.None, value: null },
                search: ""
            }
        }

        try {
            let body = { 
                knr: state.match.value[knrKey], 
                another: state.another,
                type: state.additional.type
            }
            if (state.additional.type === AdditionalType.Proxy) {
                body.proxy = state.additional.match.value[knrKey]
            }
            let response = await fetch('api/database/add', { 
                method: "PUT", 
                body: JSON.stringify(body)
            });
            let responseValue = await response?.json();
            if (responseValue?.result) {
                result.search = "";
                result.match.type = MatchType.Done;
            }
        } 
        catch (error) {
            console.error(error)
        }
        finally {
            setState(result);
        }
    }

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerCheckboxGroup}>
                <SearchBoxCheckboxRow
                    check={state.another}
                    setCheck={(value) => setState({ ...state,  another: value })}
                    label={data.text.registerCheckboxPrompt1}
                />
                <SearchBoxCheckboxRow
                    check={state.additional.type === AdditionalType.Related}
                    setCheck={(value) => setState({ 
                        ...state, 
                        additional: { 
                            ...state.additional, 
                            type: value ? AdditionalType.Related : AdditionalType.None
                        }
                    })}
                    label={data.text.registerCheckboxPrompt2}
                />
                <SearchBoxCheckboxRow
                    check={state.additional.type === AdditionalType.Proxy}
                    setCheck={(value) => setState({ 
                        ...state, 
                        additional: { 
                            ...state.additional, 
                            type: value ? AdditionalType.Proxy : AdditionalType.None
                        }
                    })}
                    label={data.text.registerCheckboxPrompt3}
                />
            </div>
            <button
                disabled={state.additional.type === AdditionalType.Proxy 
                       && state.additional.match.type !== MatchType.Success}
                onClick={() => registerUser().catch(console.error())}
            >
                { data.text.registerButtonText }
            </button>
        </div>
    )
}

export default SearchBoxRegisterRow;
//6436