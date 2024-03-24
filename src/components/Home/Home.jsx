import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Hero from '../Hero';
import wave from '../../assets/wave.svg'


const Home = () => {
    return (
       <div className=' relative flex items-center flex-col min-h-[calc(100vh-116px)] justify-center'>
            <Hero></Hero> 
            <img className='absolute bottom-0 w-full' src={wave} alt="" />    
       </div>
        
    );
};

export default Home;