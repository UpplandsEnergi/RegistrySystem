import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../appContext';
import { ToXLSX } from '../../utils/xlsxParser';
import AnalyticsDisplay from './analyticsDisplay';
import AnalyticsPopup from './analyticsPopup';
import styles from '../../styles/analytics.module.css'
import { AdditionalType } from '../searchBox/searchBox';

const AnalyticsStatus = {
    None: 0,
    Success: 1,
    Error: 2
}

const Analytics = () => {
    
    const { data } = useContext(Context);
    const [popup, setPopup] = useState(false);
    const [state, setState] = useState({
        status: AnalyticsStatus.None,
        numVoters: 0,
        numProxy1: 0,
        numProxy2: 0,
        numOthers: 0,
        numNonProxy: 0,
        data: {}
    });
    const ref = useRef(null)

    const loadData = async () => {
        let result = {
            ...state,
            status: AnalyticsStatus.Error,
            numVoters: 0,
            numProxy2: 0,
            numOthers: 0,
            numNonProxy: 0,
            data: {}
        }

        try {
            let response = await fetch('api/database/getData', { method: 'GET' });
            let responseValue = await response?.json();
            if (responseValue && responseValue.result)
            {
                let counts = responseValue.result.reduce(({ voters, proxy1, proxy2, others, nonProxy }, res) => ({
                    voters: voters + 1,
                    proxy1: res.type === AdditionalType.Related ? proxy1 + 1 : proxy1, // type 1
                    proxy2: res.type === AdditionalType.Proxy   ? proxy2 + 1 : proxy2,   // type 2
                    others: res.another ? others + 1 : others,
                    nonProxy: res.type === AdditionalType.None ? nonProxy + 1 : nonProxy
                }), { voters: 0, proxy1: 0, proxy2: 0, others: 0, nonProxy: 0 });
                let data = {}
                responseValue.result.forEach((res) => data[res.knr] = res)
                result.status = AnalyticsStatus.Success;
                result.numVoters = counts.voters;
                result.numOthers = counts.others;
                result.numProxy1 = counts.proxy1;
                result.numProxy2 = counts.proxy2;
                result.numNonProxy = counts.nonProxy;
                result.data = data;
            }
        }
        catch (error) {
            console.error(error)
        }
        finally {
            setState(result)
        }
    }

    const clearData = async () => {
        try {
            let response = await fetch('api/database/clearData', { method: 'GET' });
            let responseValue = await response?.json();
            if (!responseValue?.result)
            {
                setState({ ...state, status: AnalyticsStatus.Error })
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const downloadDatabase = async () => {
        let file = ToXLSX(state.data);
        ref.current.href = window.URL.createObjectURL(file);
        ref.current.setAttribute('download', 'Database.xlsx');
        ref.current.click();
    }

    useEffect(() => {
        // runs once every second
        const interval = setInterval(() => {
            loadData()
            .catch(console.error)
        }, 1000) 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.analyticsContainer}>
            <div className={styles.analytics}>
                <div className={styles.analyticsHeader}> 
                    {data.text.analyticsHeader} 
                </div>
                <div className={styles.analyticsContent}>
                    <AnalyticsDisplay state={{ 
                        [data.text.numVoters]: state.numVoters,
                        [data.text.numWithoutProxy]: state.numNonProxy,
                        [data.text.numProxy1]: state.numProxy1,
                        [data.text.numProxy2]: state.numProxy2,
                        [data.text.numOthers]: state.numOthers,
                        [data.text.numTotal]: state.numOthers + state.numVoters - state.numProxy2
                    }}/>
                    <div className={styles.analyticsContentRow}>
                        <button
                            disabled={state.numVoters === 0}
                            className={styles.analyticsButton + ' ' + styles.dangerous}
                            onClick={() => setPopup(true)}
                        >
                            { data.text.analyticsButtonClear }
                        </button>
                        <button
                            disabled={state.numVoters === 0}
                            className={styles.analyticsButton}
                            onClick={() => downloadDatabase()}
                        >
                            { data.text.analyticsButtonDownload }
                        </button>
                        <div 
                            className={styles.analyticsStatus}
                            style={state.status === AnalyticsStatus.Error ? { color: "red" } : undefined}
                        >
                            { 
                               [data.text.statusNameNone,
                                data.text.statusNameSuccess,
                                data.text.statusNameError][state.status] 
                            }
                        </div>
                    </div>
                </div>
            </div>
            { popup && <AnalyticsPopup clearData={clearData} close={() => setPopup(false)}/>}
            <a ref={ref} style={{ display: "none" }}/>
        </div>
    )
}
export default Analytics;