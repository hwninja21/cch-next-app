import Head from "next/head";
import 'aos/dist/aos.css'
import Footer from "./Footer";

export default function MainLayout({title, content, children}) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/images/icons/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content={content}/>
                <meta property="og:title" content="Cachy – Personalised Musical Performance" />
                <meta property="og:description" content="CACHY is a platform where you can select a musician from our roster of amazing artists, request a private performance, and send it to a friend (or even yourself as a treat) to make any occasion extra special!" />
                <meta property="og:image" content="https://storage.googleapis.com/cachyio.appspot.com/images/sharing.png" />
                <title>{title}</title>
                <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/images/icons/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png"/>
                <link rel="manifest" href="/images/icons/manifest.json"/>
            </Head>
            {children}
            <Footer/>
        </>
    )
}