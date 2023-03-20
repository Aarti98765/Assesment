import React from 'react';
import image from '../Image/Group.png';
import search from '../Image/search.svg';
import './NavBar.css';

const NavBar = () => {
   
    return (
        <div style={{
            backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", top: "0px",
            left: "0px",
            width: "1920px",
            height: "683px"
        }}>
        <div className='navLeftText'>
                <img src={require('../Image/Godrej.png')} alt="" />
        </div> 
        <div className='navRightText'>
                <a href="/"><label  className='navTextView'>Who We Are</label></a>
                <a href="/" ><label className='navTextView'>What We Do</label></a>
                <a href="/"><label  className='navTextView'>What We Offer</label></a>
                <a href="/" ><label className='navTextView'>Archive Tales</label></a>
                <a href="/" ><label className='navTextView'>Media</label></a>
                <a href="/" ><label className='navTextView'>Contact Us</label></a>
                <button style={{borderRadius: "32px" }} className='contributeBtn'>Contribute</button>
                <img style={{width: '26px', height: '26px'}} src={search} alt="" />
        </div>
            <div className='blog'>
                <label>BLOGS</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                <p>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                <p>nisi ut aliquip ex ea commodo consequat</p>
            </div>
        </div>
    )
}

export default NavBar;