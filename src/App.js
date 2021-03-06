import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Education from './Components/Education';
import Portfolio from './Components/Portfolio';
import Contacts from './Components/Contacts';
import ProfilePic from './Components/ProfilePics';
import Footer from './Components/Footer';
import Main from './Components/main';
import Email from './Components/Email';
import Experience from './Components/Experiences'


function App() {
  return (
    <BrowserRouter className='totalContent'>
      <Header />
      <Main />
      <div className="App">
        <Routes>
          <Route exact path='/Profile' element={<ProfilePic />} />
          <Route className='Home' exact path='./portfolio/' element={<Home />} />
          <Route exact path='./portfolio/Education' element={<Education />} />
          <Route exact path='./portfolio/Portfolio' element={<Portfolio />} />
          <Route exact path='./portfolio/Experiences' element={<Experience />} />
          <Route exact path='.portfolio/Contacts' element={<Contacts />} />
          <Route exact path='./portfolio/Email' element={<Email />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
