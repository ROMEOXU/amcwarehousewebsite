import React from "react";
import warehpusepic from './pic/IMG_6421.JPG';
import pallet from './pic/IMG_6423.JPG';
export default function Service() {
  return (
    <div>
      <h2> </h2>
      <p>
        We provide the high qulaity transload warehouse service with competitive
        price <br /> and have been doing port drayage transportation since 2016.
      </p>
      <img className = 'warehousePic' src={warehpusepic} alt='warehouse' />
      <img className = 'warehousePic' src={pallet} alt='warehouse' />
    </div>
  );
}