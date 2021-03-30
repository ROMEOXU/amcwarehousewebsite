import React from "react";
import homepic from "./pic/IMG_6442.JPG";
export default function Home() {
  return (
    <div className = 'cargopic-div'>
      <img className="cargopic" src={homepic} alt="home" />
      <img className="cargopic" src={homepic} alt="home" />
      <img className="cargopic" src={homepic} alt="home" />
    </div>
  );
}