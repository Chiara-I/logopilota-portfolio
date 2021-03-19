import React from "react"
import logo from "./img/logo LOGOPILOTA.svg"

function Heading() {
  return (
    <nav id="hamnav">
      <img className="logo" alt="website logo" src={logo} />
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />

      <div id="hamitems">
        <a href="#main">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#partners">Partners</a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://my-store-11567740.creator-spring.com/">
          Shop
        </a>
        <a href="#contacts">Contacts</a>
      </div>
    </nav>
  )
}

export default Heading
