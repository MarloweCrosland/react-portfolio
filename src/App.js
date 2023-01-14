import React, { useState } from 'react';
import Navi from './components/Nav';
import Project from './components/Project/Project';
import About from './components/About/About.js';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';



function App() {
  //conditional rendering stuff
  const [pageSelected, setPageSelected] = useState('About Me');

  function renderPage (page) {
    if (page === 'About Me') {
      return <About></About>
    } else if (page === 'Projects') {
      return <Project></Project>
    } else if ( page === 'Contact') {
      return <Contact></Contact>
    } else if ( page === 'Resume') {
      return <Resume></Resume>
    }
  }
  //-----------------------------------------------------------------

  //lifted up the categories so they are availible to all compontents
  const [categories] = useState([
    {
      name: 'About Me'
    },
    { name: 'Projects'},
    { name: 'Contact'},
    { name: 'Resume'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //-------------------------------------------------------------------

  return (
    <div>
      <Navi
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        pageSelected={pageSelected}
        setPageSelected={setPageSelected}
      ></Navi>
      <main>
        <div>
          {/* renderPage function is called, takes in pageSelected from nav
          to conditionally render corresponding component */}
          {/* <About></About>
          <Project></Project>
          <Contact></Contact>
          <Resume></Resume> */}
          {renderPage(pageSelected)}
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;