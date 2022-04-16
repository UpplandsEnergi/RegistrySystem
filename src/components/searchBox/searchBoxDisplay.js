import styles from '../../styles/searchBox.module.css'
import '../../@types/@searchBoxTypes'

/**
 * @param {{ state: SearchBoxState }}
 * @returns {JSX.Element}
 */
const SearchBoxDisplay = ({ state }) => 
{
    return (
        <div className={styles.searchBoxDisplay}>
            {   
                Object.keys(state.match.value).map((key, index) => (
                    <div key={index}>
                        <header> {key + ':'} </header>
                        {state.match.value[key]}
                    </div>
                ))
            }
        </div>
    )
}

export default SearchBoxDisplay;