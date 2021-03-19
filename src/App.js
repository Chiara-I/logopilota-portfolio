import "./App.css"
import React from "react"
import Heading from "./components/Heading"
import Main from "./components/Main"
import About from "./components/About"
import Partners from "./components/Partners"
import Contacts from "./components/Contacts"
import Projects from "./components/Projects"

function App() {
  return (
    <div>
      <Heading />
      <Main />
      <Projects />
      <About />
      <Partners />
      <Contacts />
    </div>
  )
}

export default App
