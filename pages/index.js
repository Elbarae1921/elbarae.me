import React from 'react';
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import MyWork from '../components/MyWork';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import DarkModeBtn from '../components/DarkModeBtn';

export default function Home() {
    const [domLoaded, setDomLoaded] = React.useState(false);

    React.useEffect(() => {
        document.onreadystatechange = function() {
            if (document.readyState === "complete") {
                setDomLoaded(true);
            }
        };
    }, []);

    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>

                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Elbarae Rguig</title>
                <meta name="title" content="Elbarae Rguig"/>
                <meta name="description" content="A self taught Fullstack Javascript developer"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://elbarae.me/"/>
                <meta property="og:title" content="Elbarae Rguig"/>
                <meta property="og:description" content="A self taught Fullstack Javascript developer"/>
                <meta property="og:image" content="https://elbarae.me/images/og.png"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://elbarae.me/"/>
                <meta property="twitter:title" content="Elbarae Rguig"/>
                <meta property="twitter:description" content="A self taught Fullstack Javascript developer"/>
                <meta property="twitter:image" content="https://elbarae.me/images/og.png"/>
            </Head>

            <NavBar />
            <Hero domLoaded={domLoaded} />
            <AboutMe domLoaded={domLoaded} />
            <MyWork />
            <Contact />
            <Footer />
            <DarkModeBtn />
        </>
    )
}
