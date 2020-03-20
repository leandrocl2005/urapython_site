import React, { Component } from 'react';

export default class Figure extends Component {
  render = () => (
    <a href={this.props.href}>
      <figure className="effect-honey tm-gallery-item">
        <img src={this.props.src} alt={this.props.alt} className="img-fluid" />
        <figcaption>{this.props.figcaption}</figcaption>
      </figure>
    </a>
  );
}
