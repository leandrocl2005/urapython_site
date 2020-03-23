import React, { Component } from 'react';

export default class Figure extends Component {
  render = () => (
    <a href={this.props.item.href}>
      <figure className="effect-honey tm-gallery-item">
        <img
          src={this.props.item.src}
          alt={this.props.item.alt}
          className="img-fluid"
        />
        <figcaption>{this.props.item.figcaption()}</figcaption>
      </figure>
    </a>
  );
}
