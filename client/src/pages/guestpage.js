import React from 'react';
import './guestpage.css'
// Importing all the required components known as of now.
import Navbar from '../components/navbar/navbar'
import Button from '../components/button/button'
import Feature from '../components/features/feature'
import Video from '../components/video/video'
import Footer from '../components/footer/footer'

// Guest page code goes here
const GuestPage = () => {

    return (
        <>
        <Navbar></Navbar>
        <Button></Button>
        <Feature></Feature>
        <Video></Video>
        <Footer></Footer>
        </>
    )
}

export default GuestPage;