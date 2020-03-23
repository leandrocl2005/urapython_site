import React, { Component } from 'react';

export default class Navbar extends Component {
  render = () => (
    <nav className="navbar navbar-expand-md tm-navbar" id="tmNav">
      <div className="container">
        <div className="tm-next">
          <a href="#infinite" className="navbar-brand">
            Infinite Loop
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars navbar-toggler-icon"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link tm-nav-link" href="#infinite">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link tm-nav-link" href="#whatwedo">
                What We Do
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link tm-nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link tm-nav-link" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link tm-nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
