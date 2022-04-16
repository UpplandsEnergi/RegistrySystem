import CustomCheckbox from '../customCheckbox'
import styles from '../../styles/searchBox.module.css'

/**
 * 
 * @param {{
 *     check: boolean,
 *     setCheck: import('react').Dispatch<boolean>,
 *     label: string
 * }} 
 * @returns {JSX.Element}
 */
const SearchBoxCheckboxRow = ({ check, setCheck, label }) => 
{
    return (
        <div className={styles.registerCheckboxRow}>
            <CustomCheckbox
                value={check}
                onClick={() => setCheck(!check)}
            />
            { label }
        </div>
    )
}

export default SearchBoxCheckboxRow;