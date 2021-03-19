import React from "react"
import travellando from "./img/travellando.svg"

function Partners() {
  return (
    <div className="partners" id="partners">
      <h2> Partners</h2>
      <a
        target="_blank"
        rel="noreferrer"
        href="http://www.travellandoinmoto.it/">
        <img className="partner" alt="travellando-logo" src={travellando} />
      </a>
    </div>
  )
}

export default Partners
