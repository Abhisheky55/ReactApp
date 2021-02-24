import React from 'react';
import me from "../src/images/1396228492.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
                name='Grow your business with' 
                imgsrc={me}
                visit='/service'
                btname='Get Started'
            />
        </>
    );
};

export default Home;
