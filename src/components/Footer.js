import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='flex flex-col bg-gray-400 w-full h-24 text-center'>
            <div className='text-center space-x-4 p-2'>
                <Link to={'http://www.facebook.com'}><FacebookIcon/></Link>
                <Link to={'http://www.twitter.com'}><XIcon/></Link>
                <Link to={'http://www.instagram.com'}><InstagramIcon/></Link>
                <Link to={'http://www.pinterest.com'}><PinterestIcon/></Link>
                <Link to={'http://www.linkedin.com'}><LinkedInIcon/></Link>
            </div>
            <span className='font-bold m-2 p-2 underline'>Copyright &#xA9; Reserved 2024</span>
        </div>
    )
}

export default Footer
