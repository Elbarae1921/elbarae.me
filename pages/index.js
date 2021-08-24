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
                {/* to do: add og image */}
                <meta property="og:image" content=""/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://elbarae.me/"/>
                <meta property="twitter:title" content="Elbarae Rguig"/>
                <meta property="twitter:description" content="A self taught Fullstack Javascript developer"/>
                {/* to do: add twitter image */}
                <meta property="twitter:image" content=""/>
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
