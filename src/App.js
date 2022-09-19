import React, { useState } from 'react';
import Navi from './components/Nav';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {

  const [navitems] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ]);

  const [currentNavi, setCurrentNavi] = useState(navitems[1]);

  return (
    <div>
        <Navi>
          navitems={navitems}
          setCurrentNavi={setCurrentNavi}
          currentNavi={currentNavi}
        </Navi>

        <main>
          <Project></Project>
          <Footer></Footer>
        </main>
    </div>
  );
}

export default App;
