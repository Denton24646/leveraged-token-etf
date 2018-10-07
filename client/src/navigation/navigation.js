import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../screens/Home'
import RequestLoan from '../screens/request-loan'

import { Footer } from './footer'

export const Navigation = () => (
  <Router>
    <div>
      <div className="px-3 py-6 shadow flex flex-start">
      <Link className="no-underline text-green-light font-bold mr-6" to="/">Leverage</Link>
      <Link className="no-underline text-grey-darker font-light mr-6" to="/request-loan">Apply for a Loan</Link>
      <Link className="no-underline text-grey-darker font-light mr-6" to="/about">About</Link>
      </div>
      

      <Route exact path="/" component={Home} />
      
      <Route path="/about" component={About} />
      <Route path="/request-loan" component={RequestLoan} />

      <Footer />
    </div>
  </Router>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);