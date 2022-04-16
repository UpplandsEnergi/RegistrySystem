import { useContext } from 'react';
import { Context } from '../appContext';
import styles from '../../styles/analytics.module.css'

/**
 * @param {{ clearData: () => void, close: () => void  }}
 * @returns {JSX.Element}
 */
const AnalyticsPopup = ({ clearData, close }) => {
    
    const { data } = useContext(Context);

    return (
        <div className={styles.analyticsPopupBackground}> 
            <div className={styles.analyticsPopup}>
                { data.text.analyticsPopupHeader }
                <div>
                    <button 
                        className={styles.analyticsPopupButton}
                        onClick={() => {
                            close()
                            clearData().catch(console.error())
                        }}
                    >
                        { data.text.analyticsPopupYes }
                    </button>
                    <button
                        className={styles.analyticsPopupButton}
                        onClick={() => close()}
                    >
                        { data.text.analyticsPopupNo }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPopup;