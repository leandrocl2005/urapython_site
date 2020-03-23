import React, { Component } from 'react';
import { NavbarItem } from "./NavbarItem";

export default class Navbar extends Component {

  
  constructor(props) {
    super(props)
    this.state = {
      navitems: [
        {
          id: 1,
          name: "Home"
        },
        {
          id: 2,
          name: "Comunidade"
        },
        {
          id: 3,
          name: "Colaboradores"
        },
        {
          id: 4,
          name: "Tutoriais"
        },
        {
          id: 5,
          name: "Contato"
        },                        
      ],
      navtitle: "Urapython"
    }
  }

  render = () => (
    <nav className="navbar navbar-expand-md tm-navbar" id="tmNav">
      <div className="container">
        <div className="tm-next">
          <a href="#infinite" className="navbar-brand">
            {this.state.navtitle}
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
              {this.state.navitems.map(
                item => <NavbarItem key={item.id} item={item}/>)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
