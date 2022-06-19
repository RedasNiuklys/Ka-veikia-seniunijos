import React from 'react';
import UserHeader from '../../Header/UserHeader';
import HomeHeader from '../../Header/HomeHeader';
import Abouts from './About.jsx';
function About() {
    return (
        <>
            { sessionStorage['userData'] ? <UserHeader /> : <HomeHeader />}
            <Abouts />
        </>
    );
}

export default About;