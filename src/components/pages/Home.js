import React from 'react';
import { useEffect, Fragment } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';

function Home () {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return ( 
        <Fragment>
            <HeroSection />
            <Cards />
        </Fragment>
     );
}
 
export default Home;