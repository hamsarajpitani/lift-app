/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Services from './Services';
import Calculator from './Calculator';
import {Switch,Route,Redirect} from 'react-router-dom';
import Footer from './Footer';
import Chooseus from './Chooseus';

// import Contact from './pages/Contact';


function App() {
  return (
    <>
    <Navbar/>
    <Calculator/>
    <Switch>
      <Route exact path='/' component={Carousel}></Route>
      {/* <Route exact path='/' component={Carouselslide}></Route> */}
      <Route exact path='/services' component={Services}></Route>
      {/* <Route exact path='/contact' component={Contact}></Route> */}
      
    </Switch>
    <Chooseus/>
    <Footer/>
    </>
  );
}

export default App;
