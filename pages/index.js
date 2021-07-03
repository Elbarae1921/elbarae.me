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
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Full-time freelancer as Web Developer and UI/UX Designer</title>
                <meta name="title" content="Full-time freelancer as Web Developer and UI/UX Designer"/>
                <meta name="description" content="I'm a full-time freelancer as a web Developer And UI/UX Designer, Worked on various types of projects and I'm confident you'll enjoy working with me."/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="http://zakariabenali.me/"/>
                <meta property="og:title" content="Full-time freelancer as Web Developer and UI/UX Designer"/>
                <meta property="og:description" content="I'm a full-time freelancer as a web Developer And UI/UX Designer, Worked on various types of projects and I'm confident you'll enjoy working with me."/>
                <meta property="og:image" content=""/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="http://zakariabenali.me/"/>
                <meta property="twitter:title" content="Full-time freelancer as Web Developer and UI/UX Designer"/>
                <meta property="twitter:description" content="I'm a full-time freelancer as a web Developer And UI/UX Designer, Worked on various types of projects and I'm confident you'll enjoy working with me."/>
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
