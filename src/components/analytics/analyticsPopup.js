import { useContext, useState } from 'react';
import { Context } from '../appContext';
import styles from '../../styles/analytics.module.css'

const PasswordState = {
    None: 0,
    Valid: 1,
    Invalid: 2
}

/**
 * @param {{ clearData: () => void, close: () => void  }}
 * @returns {JSX.Element}
 */
const AnalyticsPopup = ({ clearData, close }) => {
    
    const { data } = useContext(Context);
    const [text, setText] = useState("");
    const [state, setState] = useState(PasswordState.None);

    const validatePassword = async () => {
        let response = await fetch('api/database/pass', { 
            method: "PUT", 
            body: JSON.stringify({ pass: text })
        });
        let value = await response?.json();
        setState(value.success && value.result
            ? PasswordState.Valid
            : PasswordState.Invalid)
    }

    return (
        <div className={styles.analyticsPopupBackground}> 
            <div className={styles.analyticsPopup}>
                { data.text.analyticsPopupHeader }
                <div>
                    <div> {data.text.analyticsPasswordPrompt + ':'} </div>
                    <input 
                        type="password" 
                        className={styles.analyticsPassword}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        disabled={state === PasswordState.Valid}
                    />
                    <button
                        className={styles.analyticsPasswordButton}
                        onClick={() => validatePassword()}
                        disabled={state === PasswordState.Valid}
                    >
                        { data.text.analyticsPasswordVerify }
                    </button>
                </div>
                <div>
                    <button
                        disabled={state !== PasswordState.Valid}
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