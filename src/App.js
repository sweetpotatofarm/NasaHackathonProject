import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Introduction from './Introduction';
import AboutUs from './AboutUs';
import Photo from'./Photo';

class App extends React.Component{
  render(){
    return(
      <div>
        <div className="content">
          <Navbar></Navbar>
          <Introduction></Introduction>
          <AboutUs></AboutUs>
          <Photo></Photo>
        </div>
      </div>
    );
  }
}

export default App;
