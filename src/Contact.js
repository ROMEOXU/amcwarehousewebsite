import React from "react";
export default function Contact() {
  return (
    <div>
      <h2>contact form </h2>
      <form className="form">
        <input className="input" placeholder="name" type="text" />
        <input className="input" placeholder="email" type="text" />
        <textarea className="input" placeholder="your request" type="text" />
        <button>Submit</button>
      </form>
    </div>)
}