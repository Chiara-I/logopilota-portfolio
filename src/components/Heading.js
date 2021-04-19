import React from "react"
import logo from "./img/logo LOGOPILOTA.svg"
import Hamburger from "./Hamburger"

function Heading() {
  return (
    <nav id='hamnav'>
      <a href='#main'>
        <img className='logo' alt='website logo' src={logo} />
      </a>
      <Hamburger />
    </nav>
  )
}

export default Heading
