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
          <Route className='Home' exact path='https://yonie3124.github.io/' element={<Home />} />
          <Route exact path='https://yonie3124.github.io/Education' element={<Education />} />
          <Route exact path='https://yonie3124.github.io/Portfolio' element={<Portfolio />} />
          <Route exact path='https://yonie3124.github.io/Experiences' element={<Experience />} />
          <Route exact path='https://yonie3124.github.io/Contacts' element={<Contacts />} />
          <Route exact path='https://yonie3124.github.io/Email' element={<Email />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
