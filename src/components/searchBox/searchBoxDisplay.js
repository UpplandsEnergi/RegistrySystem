import { useContext, useState } from 'react'
import { Context } from '../appContext'
import { MatchType } from './searchBox'
import CustomCheckbox from '../customCheckbox'
import SearchBoxContent from './searchBoxContent'
import styles from '../../styles/searchBox.module.css'
import '../../@types/@searchBoxTypes'

/**
 * @param {{
 *     state: SearchBoxState,
 *     setState: import('react').Dispatch<SearchBoxState>,
 *     onlyShowContent: boolean
 * }}
 * @returns {JSX.Element}
 */
const SearchBoxDisplay = ({ state, setState, onlyShowContent = false }) => 
{
    const { data } = useContext(Context);

    const registerUser = async (knr, value) => {
        try 
        {
            let response = await fetch('api/database/add', { 
                method: "PUT", 
                body: JSON.stringify({ knr: knr, value: value })
            });
            let responseValue = await response?.json();
            if (responseValue?.result)
            {
                setState({
                    ...state,
                    search: "",
                    match: {
                        type: MatchType.Done,
                        value: null,
                        check: false
                    }
                })
            }
            else
            {
                setState({ 
                    ...state, 
                    match: {
                        ...state.match,
                        type: MatchType.DatabaseError,
                        value: { "Status": "Misslyckades Registrera" },
                    }
                })
            }
        } 
        catch (error) 
        {
            console.error(error)
            setState({ 
                ...state, 
                match: {
                    ...state.match,
                    type: MatchType.DatabaseError,
                    value: { "Status": "Misslyckades Registrera" },
                }
            })
        }
    }

    const [subState, setSubState] = useState({ 
        search: "",
        match: {
            type: MatchType.None,
            value: null,
            check: false
        } 
    })

    return (
        <div className={styles.searchBoxDisplayContainer}>
            <div className={styles.searchBoxDisplay}>
                {   
                    Object.keys(state.match.value).map((key, index) => (
                        <div key={index} className={styles[key]}>
                            <header> {key + ':'} </header>
                            {state.match.value[key]}
                        </div>
                    ))
                }
            </div>
            {
                !onlyShowContent && 
                <>
                    <div className={styles.registerContainer}>
                        <div className={styles.registerCheckboxGroup}>
                            <CustomCheckbox
                                value={state.match.check}
                                onClick={() => setState({ ...state, match: { ...state.match, check: !state.match.check }})}
                            />
                            { data.text.registerCheckboxPrompt }
                        </div>
                        <button
                            disabled={state.match.check && subState.match.type !== MatchType.Success}
                            onClick={() => registerUser(state.match.value['Kund ID'], state.match.check)}
                        >
                            { data.text.registerButtonText }
                        </button>
                    </div>
                    { state.match.check &&
                        <SearchBoxContent 
                            label={data.text.additionalInputPrompt}
                            state={subState}
                            parentState={state}
                            setState={setSubState}
                            onlyShowContent={true}
                        />
                    }
                </>
            }
        </div>
    )
}

export default SearchBoxDisplay;