import { useContext, useState } from 'react'
import { Context } from '../appContext'
import SearchBoxContent from './searchBoxContent'
import SearchBoxDisplay from './searchBoxDisplay'
import SearchBoxRegisterRow from './searchBoxRegisterRow'
import styles from '../../styles/searchBox.module.css'

export const MatchType = {
    None: 0,
    Success: 1,
    Fail: 2,
    Registered: 3,
    DatabaseError: 4,
    Done: 5,
    MatchingAdditional: 6,
    AlreadyProxy: 7
}

export const AdditionalType = {
    None: 0,
    Related: 1,
    Proxy: 2
}

const knrKey = 'Kund ID'
const pnrKey = 'Org/Pnr';

/**
 * @returns {JSX.Element}
 */
const SearchBox = () => 
{
    const { data } = useContext(Context);

    const [state, setState] = useState({ 
        search: "",
        match: {
            type: MatchType.None,
            value: null
        },
        another: false,
        additional: {
            type: AdditionalType.None,
            search: "",
            match: { type: MatchType.None, value: null }
        }
    });

    return (
        <div className={styles.searchBoxContainer}>
            <div className={styles.searchBox}>
                <div className={styles.searchBoxHeader}> 
                    {data.text.searchBoxHeader} 
                </div>
                <SearchBoxContent 
                    label={data.text.searchBoxInputPrompt}
                    state={state}
                    setState={setState}
                    knrKey={knrKey}
                    pnrKey={pnrKey}
                />
                { state.match.type === MatchType.Success &&
                    <div className={styles.searchBoxContent}> 
                        <SearchBoxDisplay state={state}/>
                        <SearchBoxRegisterRow
                            state={state} 
                            setState={setState}
                            knrKey={knrKey}
                        />
                    </div>
                }
                { state.additional.type === AdditionalType.Proxy &&
                    <>
                        <SearchBoxContent 
                            label={data.text.additionalInputPrompt}
                            state={state}
                            setState={setState}
                            knrKey={knrKey}
                            pnrKey={pnrKey}
                            isAdditional={true}
                        />
                        { state.additional.match.type === MatchType.Success &&
                            <div className={styles.searchBoxContent}> 
                                <SearchBoxDisplay state={state.additional}/>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default SearchBox;