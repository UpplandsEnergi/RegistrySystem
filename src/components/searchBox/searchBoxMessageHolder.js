import styles from '../../styles/searchBox.module.css'

/**
 * @param {{ text: string }} 
 * @returns {JSX.Element}
 */
const SearchBoxMessageHolder = ({ text }) => 
{
    return (
        <div className={styles.searchBoxTextBox}>
            <div>
                { text }
            </div>
        </div>
    )
}


export default SearchBoxMessageHolder;