import React, { Component } from 'react';

export default class Figure extends Component {
  render = () => (
    <figure className="tm-testimonial-item">
      <img
        src={this.props.src}
        alt={this.props.key}
        className="img-fluid mx-auto"
      />
      <blockquote>{this.props.blockquote}</blockquote>
      <figcaption>{this.props.figcaption}</figcaption>
    </figure>
  );
}
