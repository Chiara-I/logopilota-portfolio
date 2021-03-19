import "photoswipe/dist/photoswipe.css"
import "photoswipe/dist/default-skin/default-skin.css"
import React from "react"

import { Gallery, Item } from "react-photoswipe-gallery"

const MyGallery = () => (
  <div className="projects" id="projects">
    <h2>My Projects</h2>
    <Gallery>
      <Item
        original="https://i.imgur.com/LLQYxYx.jpg"
        thumbnail="https://i.imgur.com/LLQYxYx.jpg"
        width="800"
        height="800">
        {({ ref, open }) => (
          <img
            alt="project-1"
            ref={ref}
            onClick={open}
            src="https://i.imgur.com/LLQYxYx.jpg"
          />
        )}
      </Item>
      <Item
        original="https://i.imgur.com/VHCsnGo.jpg"
        thumbnail="https://i.imgur.com/VHCsnGo.jpg"
        width="800"
        height="800">
        {({ ref, open }) => (
          <img
            alt="project-2"
            ref={ref}
            onClick={open}
            src="https://i.imgur.com/VHCsnGo.jpg"
          />
        )}
      </Item>
      <Item
        original="https://i.imgur.com/6ghFMST.jpg"
        thumbnail="https://i.imgur.com/6ghFMST.jpg"
        width="800"
        height="800">
        {({ ref, open }) => (
          <img
            alt="project-3"
            ref={ref}
            onClick={open}
            src="https://i.imgur.com/6ghFMST.jpg"
          />
        )}
      </Item>
      <Item
        original="https://i.imgur.com/tpaIEuV.jpg"
        thumbnail="https://i.imgur.com/tpaIEuV.jpg"
        width="800"
        height="800">
        {({ ref, open }) => (
          <img
            alt="project-4"
            ref={ref}
            onClick={open}
            src="https://i.imgur.com/tpaIEuV.jpg"
          />
        )}
      </Item>
      <Item
        original="https://i.imgur.com/hs42NT5.jpg"
        thumbnail="https://i.imgur.com/hs42NT5.jpg"
        width="800"
        height="800">
        {({ ref, open }) => (
          <img
            alt="project-5"
            ref={ref}
            onClick={open}
            src="https://i.imgur.com/hs42NT5.jpg"
          />
        )}
      </Item>
      <Item
        original="https://i.imgur.com/3x5BSda.jpg"
        thumbnail="https://i.imgur.com/3x5BSda.jpg"
        width="800"
        height="800">
        {({ ref, open }) => (
          <img
            alt="project-6"
            ref={ref}
            onClick={open}
            src="https://i.imgur.com/3x5BSda.jpg"
          />
        )}
      </Item>
      <Item
        original="https://i.imgur.com/amsH51b.jpg"
        thumbnail="https://i.imgur.com/amsH51b.jpg"
        width="800"
        height="800">
        {({ ref, open }) => (
          <img
            alt="project-7"
            ref={ref}
            onClick={open}
            src="https://i.imgur.com/amsH51b.jpg"
          />
        )}
      </Item>
      <Item
        original="https://i.imgur.com/sLW1XPK.jpg"
        thumbnail="https://i.imgur.com/sLW1XPK.jpg"
        width="800"
        height="800">
        {({ ref, open }) => (
          <img
            alt="project-8"
            ref={ref}
            onClick={open}
            src="https://i.imgur.com/sLW1XPK.jpg"
          />
        )}
      </Item>
      <Item
        original="https://i.imgur.com/xKheIx6.jpg"
        thumbnail="https://i.imgur.com/xKheIx6.jpg"
        width="800"
        height="800">
        {({ ref, open }) => (
          <img
            alt="project-9"
            ref={ref}
            onClick={open}
            src="https://i.imgur.com/xKheIx6.jpg"
          />
        )}
      </Item>
    </Gallery>
  </div>
)

export default MyGallery
