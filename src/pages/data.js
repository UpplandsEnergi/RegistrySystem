import { useEffect, useState } from 'react'
import Head from 'next/head'
import Analytics from '../components/analytics/analytics'
import styles from '../styles/Home.module.css'
import AppContext from '../components/appContext';

export default function Home() {
    
    const [loaded, setLoaded] = useState(false)

    useEffect(() => 
    {
        // Make sure the database is connected
        fetch('api/database/isConnected', { method: 'GET' })
        .then((res) => res.json())
        .then((res) => setLoaded(Boolean(res?.connected )))
        .catch(console.error)
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Registry System</title>
                <meta name="Registry System" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <AppContext>
                    { loaded && <Analytics/> }
                </AppContext>
            </main>
        </div>
    )
}
