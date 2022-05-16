import React from 'react';
import man2 from './assets/man.png';
import './styles/Main.css'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>
                <div className="main__img" id='profileImage'>
                    <img  src={man2} alt="Profile Pic" />
                </div>
                <div className="main__content,">
                    <div className="text">
                        <h2 className='fullName, hoverings'> I am Yonas</h2>
                        <h5 className='fullName, hoverings'>Full Stack Developer</h5>
                        <div className='fullName, hoverings'>
                            <a id='repository' href='https://github.com/yonie3124?tab=repositories'> Click Here to Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main
