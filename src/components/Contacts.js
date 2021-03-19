import React from "react"
import instagramLogo from "./img/instagram-square.svg"
import facebookLogo from "./img/facebook.svg"
import mail from "./img/envelope.svg"
import shop from "./img/shopping-cart.svg"

function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <h2>Let's keep in touch</h2>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/logopilota/">
        <img className="insta-logo" alt="instragam logo" src={instagramLogo} />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/LogoPilota/">
        <img className="facebook-logo" alt="facebook logo" src={facebookLogo} />
      </a>

      <a href="mailto: beppealbo@gmail.com">
        <img className="mail" alt="mail" src={mail} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://my-store-11567740.creator-spring.com/">
        <img className="mail" alt="shop" src={shop} />
      </a>
      <p id="footer">© 2021 LogoPilota - Graphics4Riders</p>
    </div>
  )
}

export default Contacts
