import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/nav';
import AboutMe from './pages/about-me';
import Footer from './components/footer';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

function App() {
  const [page , setPage] = useState ('About')
  function PageToRender () {
    switch (page) {
      case 'About':
        return <AboutMe/>
        break
      case 'Contact':
        return <Contact/>
        break
      case 'Portfolio':
        return <Portfolio/>
        break
    }
  } 
  return (
    <div className="App">
     <NavBar page = {page} setPage = {setPage}/>
    <PageToRender/>
     <Footer/>
    </div>

  );
}

export default App;
