import React from "react";
import warehpusepic from './pic/IMG_6421.JPG';
import pallet from './pic/IMG_6423.JPG';
export default function Service() {
  return (
    <div>
      <h2>Prep</h2>
      <p>
      Amazon has packaging and prep requirements for products being shipped and stored in FBA centers. Properly packaging and preparing units helps to reduce delays in getting your products in. We are experts in Amazon-compliance, ensuring that your products will not be rejected.
      </p>
      <h2>Storage</h2>
      <p>While most companies, including Amazon have ever-changing charges for FBA storage, We offers a flat rate. No hidden fees and no long-term charges.</p>
      <h2>Drayage</h2>
      <p>Let us handle your Amazon FCL Drayage transportation needs from Oakland Port. If the destination is not local, we will assist with transloading, which is common for Amazon shipments.</p>
      <img className = 'warehousePic' src={warehpusepic} alt='warehouse' />
      <img className = 'warehousePic' src={pallet} alt='warehouse' />
    </div>
  );
}