import React, { useState } from 'react';
import Navi from './components/Nav';
import Footer from './components/Footer';
import Project from './components/Project';


//App.js is the center of the application/ wrapper component
function App() {

  return (
    <div>
        <Navi>
        </Navi>

        <main>
          <Project></Project>
          <Footer></Footer>
        </main>
    </div>
  );
}

export default App;
