import React, { useState } from 'react';
import Navi from './components/Nav';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {


  return (
    <div>
        <Navi>
        </Navi>

        <main>
          <Project></Project>
        </main>
    </div>
  );
}

export default App;
