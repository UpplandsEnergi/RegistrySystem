import { useContext } from 'react'
import { Context } from '../appContext'
import styles from '../../styles/searchBox.module.css'
import '../../@types/@searchBoxTypes'

/**
 * 
 * @param {{ 
 *     text: string, 
 *     setText: import('react').Dispatch<string>, 
 *     onClick: () => void, 
 *     label: string 
 * }} 
 * @returns {JSX.Element}
 */
const SearchBarRow = ({ text, setText, onClick, label }) => {

    const { data } = useContext(Context);

    return (
        <div className={styles.searchBarRow}>
            <div className={styles.searchBarRowPrompt}> 
                { label } 
            </div>
            <input
                className={styles.searchBarRowInput}
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className={styles.searchBarRowButton}
                onClick={() => onClick()}
            >
                {data.text.searchButtonText}
            </button>
        </div>
    )
}

export default SearchBarRow;