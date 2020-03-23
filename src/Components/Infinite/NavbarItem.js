import React, { Component } from "react";

export class NavbarItem extends Component {

    render = () => 
        <li className="nav-item">
            <a className="nav-link tm-nav-link" href="#infinite">
                {this.props.item.name}
            </a>
        </li>

}