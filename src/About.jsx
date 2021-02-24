import React from 'react';
import me from "../src/images/team.svg";
import Common from './Common';

const About = () => {
    return (
        <>
            <Common 
                name='Welcome to About Page' 
                imgsrc={me}
                visit='/contact'
                btname='Contact Now'
            />
        </>
    );
};

export default About;
