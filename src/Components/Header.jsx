import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { AiOutlineMenu } from 'react-icons/ai';
import './styles/Header.css';
import CTA from './CTA'

const Header = () => {

    const [active, setActive] = useState(false);


    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div className='header'>
            <div className="header__logo">
                <CTA />
            </div>
            <nav className={active ? 'navbar active' : 'navbar'}>
                <ul>
                    <div className='closed'>
                        <GrClose className='close' onClick={showMenu} />
                    </div>
                    <li className="nav-item">
                        <Link className='nav-content' to='./'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-content' to='./Education'>Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-content' to='./Portfolio'>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-content' to='./Experiences'>Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-content' to='./Email'>COntact Me</Link>
                    </li>
                </ul>
            </nav>
            <div className="changer">
                <AiOutlineMenu className='menu' onClick={showMenu}/>
            </div>
        </div>
    )
}

export default Header
