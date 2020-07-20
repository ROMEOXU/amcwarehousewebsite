import React from "react";
import homepic from "./pic/cargo.jpg";
export default function Home() {
  return (
    <div>
      <img className="cargopic" src={homepic} alt="home" />
    </div>
  );
}