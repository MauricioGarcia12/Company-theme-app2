import React,{useState} from 'react'
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/InfoSection';
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar'

const Homepage = () => {
    const [isOpen,setIsOpen]=useState(false);

    const toggle = () =>{
        //go from true to false anda false to true
        setIsOpen(!isOpen)
    }
    return (  
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Services/>
        <Footer/>
        </>
        
    )
}

export default Homepage
