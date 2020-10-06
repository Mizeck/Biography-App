import React from 'react';

import './App.css';


//Components importing 
import Nav from './Pages/Components/Nav/Nav';
import Body from './Pages/Components/Body/MainBody';
import Footer from './Pages/Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Body/>
      <Footer/>

     
    </div>
  );
}

export default App;
