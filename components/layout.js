import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>漢字</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <main class="h-screen font-sans">
                {children}
            </main>
        </>
    )
}