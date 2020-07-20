import React from 'react';

import './App.css';
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
     <nav className="main">
        <Link className="title" to="/">
          AMC WAREHOUSE
        </Link>
        {/* <img src={pic} alt="插入照片的办法" learning github /> */}
      </nav>

      <nav className="sub">
        <div>
          <Link className="link" to="/">
            home
          </Link>
        </div>
        <div>
          <Link className="link" to="/service">
            service
          </Link>
        </div>
        <div>
          <Link className="link" to="/contact">
            contact
          </Link>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
