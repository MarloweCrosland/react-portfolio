import React, { useState } from 'react';
import Navi from './components/Nav';
import Project from './components/Project';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';


//lifted up the categories so they are availible to all compontents
function App() {
  const [categories] = useState([
    {
      name: 'About Me'
    },
    { name: 'Projects'},
    { name: 'Contact'},
    { name: 'Resume'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navi
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Navi>
      <main>
        <div>
          <About></About>
          <Project></Project>
          <Contact></Contact>
          <Resume></Resume>
        </div>
      </main>
    </div>
  );
}

export default App;