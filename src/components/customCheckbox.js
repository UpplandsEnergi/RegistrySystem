import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import styles from '../styles/customCheckbox.module.css'

const CustomCheckbox = ({ value, onClick }) => {
    const size = { width: "100%", height: "100%" }
    return (
        <div 
            className={styles.customCheckbox}
            onClick={onClick}
        >
            {
                value
                ? <CheckBoxIcon sx={size}/>
                : <CheckBoxOutlineBlankIcon/>
            }
        </div>
    )
}

export default CustomCheckbox;