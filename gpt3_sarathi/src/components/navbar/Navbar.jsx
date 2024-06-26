import React from 'react'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'; 
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#home">Open AI</a></p>
    <p><a href="#home">Case Studies</a></p>
    <p><a href="#home">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='gpt3__navbar-menu-container'>
          <div className='gpt3__navbar-menu-container-links'>
            <Menu />
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign Up</button>
            </div>
          </div>
        </div>
      )
      }
      </div>
    </div>
  )
}

export default Navbar