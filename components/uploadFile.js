
import { useContext } from 'react';
import { Context } from './appContext';
import styles from '../styles/uploadFile.module.css'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import XLSXParser from '../utils/xlsxParser';

const UploadFile = () => {
    
    const { data, dispatch } = useContext(Context)
    
    const handleFileUpload = async (e) => {
        let file = e.target.files[0];
        if (!file?.name?.endsWith('.xlsx')) {
            e.target.files = [];
            console.error("failed to read file")
        }
        else
        {
            try 
            {
                dispatch.setFile(await XLSXParser(file));
            } 
            catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <div className={styles.uploadFileContainer}>
            <div className={styles.uploadFile}>
                <input 
                    className={styles.uploadFileInput}
                    type='file'
                    accept='.xlsx'
                    onChange={handleFileUpload}
                />
                <div className={styles.uploadFileContent}>
                    { data.text.uploadPrompt }
                    <UploadFileIcon sx={{ width: '40%', height: '40%'}}/>
                </div>
            </div>
        </div>
    )
}

export default UploadFile;