import { useContext, useState } from 'react'
import { Context } from '../appContext'
import SearchBoxContent from './searchBoxContent'
import styles from '../../styles/searchBox.module.css'

export const MatchType = {
    Success: 0,
    Fail: 1,
    Registered: 2,
    DatabaseError: 3,
    Done: 4,
    MatchingAdditional: 5,
    None: 6
}

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
            value: null,
            check: false
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
                    value={state.search}
                />
            </div>
        </div>
    )
}

export default SearchBox;