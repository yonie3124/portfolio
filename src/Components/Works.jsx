import React from 'react';
import react from './assets/react.jpg';
import ui from './assets/ui.jpg';
import faceBookChallenge from './assets/faceBookChallenge.png';
import payPalSssHtml from './assets/payPalSssHtml.png';
import TenorApiChallenge from './assets/TenorApiChallenge.png';
import countDownTimer from './assets/countDownTimer.png';
import ToDoTaskWithReact from './assets/ToDoTaskWithReact.png';
import AccessingGitHubAccount from './assets/AccessingGitHubAccount.png';
import './styles/Works.css';

const Works = () => {
    return (

        <div className='works'>
            <div>
                <h1 className='heading'>As inspiration of my works during the Full Stack Developer </h1>
            </div>
            <div>
                <div className="work__section">

                    <div className="cards">
                        <img src={faceBookChallenge} alt="" />
                        <button><a href='https://github.com/yonie3124/face-book-framework' alt='FaceBook page' > See Work</a></button>
                    </div>
                    <div className="cards">
                        <img src={payPalSssHtml} alt="" />
                        <button><a href='https://github.com/yonie3124/payPal-demo-challenge' alt='paypal page' > See Work</a></button>
                    </div>
                    <div className="cards">
                        <img src={TenorApiChallenge} alt="" />
                        <button><a href='https://github.com/yonie3124/Tenor-Gif' alt='Tenor API' > See Work</a></button>
                    </div>
                    <div className="cards">
                        <img src={countDownTimer} alt="" />
                        <button><a href='https://github.com/yonie3124/CountdownTimer' alt='COuntdown Timer' > See Work</a></button>
                    </div>
                    <div className="cards">
                        <img src={ToDoTaskWithReact} alt="" />
                        <button><a href='https://github.com/yonie3124/To-Do-Task-with-editing-deleting' alt='To do task' > See Work</a></button>
                    </div>
                    <div className="cards">
                        <img src={AccessingGitHubAccount} alt="" />
                        <button><a href='https://github.com/yonie3124/git-hub-challenge' alt='Github challenge' > See Work</a></button>
                    </div>
                    <div className="cards">
                        <img src={react} alt="" />
                        <button><a href='https://github.com/yonie3124/portfolio-with-react' alt='Portfolio' > See Work</a></button>
                    </div>

                    <div className="cards">
                        <img src={ui} alt="" />
                        <button><a href='https://github.com/yonie3124/FromTurinToGates' alt='Toring to Gates' > See Work</a></button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Works
