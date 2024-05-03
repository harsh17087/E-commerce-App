import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const Footer = () => {
    
    const scrollToTop=()=>{
        window.scrollTo(0,0)
    }
    
    return (
        <div className='grid grid-flow-col bg-gray-400 w-full h-18 text-center'>
            <div className='grid-cols-4 py-4'>
                <a className='font-bold px-2 underline' href='/'>Home</a>
                <a className='font-bold px-2 underline' href='/about'>About</a>
                <a className='font-bold px-2 underline' href='/contact'>Contact</a>
                <a className='font-bold px-2 underline' href='/cart'>Cart</a>
            </div>
            <div className='grid-cols-4 text-center space-x-4 p-2 flex flex-col'>
                <div>
                <Link className='px-2' to={'http://www.facebook.com'}><FacebookIcon/></Link>
                <Link className='px-2' to={'http://www.twitter.com'}><XIcon/></Link>
                <Link className='px-2' to={'http://www.instagram.com'}><InstagramIcon/></Link>
                <Link className='px-2' to={'http://www.pinterest.com'}><PinterestIcon/></Link>
                <Link className='px-2' to={'http://www.linkedin.com'}><LinkedInIcon/></Link>
                </div>
                <span className='font-bold m-2 p-2 underline'>Copyright &#xA9; Reserved 2024</span>
            </div>
            <div className='p-2 m-2 grid-cols-4'>
                <button className='hover:underline font-bold' onClick={scrollToTop}>Go to Top</button>
            </div>
        </div>
    )
}

export default Footer
