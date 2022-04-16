import styles from '../../styles/analytics.module.css'

/**
 * @param {{ state: Object.<string, string> }}
 * @returns {JSX.Element}
 */
const AnalyticsDisplay = ({ state }) => 
{
    return (
        <div className={styles.analyticsDisplay}>
            {   
                Object.keys(state).map((key, index) => (
                    <div key={index}>
                        <header> {key + ':'} </header>
                        {state[key]}
                    </div>
                ))
            }
        </div>
    )
}
 

export default AnalyticsDisplay;