import React, { useState } from "react";
import Navi from "./components/Nav/Nav.js";
import Project from "./components/Project/Project";
import About from "./components/About/About.js";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer.js";
import './App.css'
import { createContext } from "react";

// LIGHT/DARK MODE FUNCTIONALITY

export const ThemeContext = React.createContext(null);

function App() {
  //conditional rendering stuff
  const [pageSelected, setPageSelected] = useState("About Me");

  function renderPage(page) {
    if (page === "About Me") {
      return <About></About>;
    } else if (page === "Programming") {
      return <Project></Project>;
    } else if (page === "Contact") {
      return <Contact></Contact>;
    } else if (page === "Testimonials") {
      return <Testimonials></Testimonials>;
    }
  }
  //-----------------------------------------------------------------

  //lifted up the categories so they are availible to all compontents
  const [categories] = useState([
    {
      name: "About Me",
    },
    { name: "Programming" },
    { name: "Contact" },
    { name: "Testimonials" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  //----------Theme State--------------
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr ==="light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navi
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          pageSelected={pageSelected}
          setPageSelected={setPageSelected}
        ></Navi>
        <main>
          <div>
          <div className="toggle">
          <img onClick={toggleTheme}className="footer_moon" alt="dark/lightmode icon" src={'https://i.pinimg.com/originals/fa/86/97/fa869743d08ca95414a50cc0ec1526bd.png'}/>
          </div>
            {renderPage(pageSelected)}
          </div>
          
        
          <Footer></Footer>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
