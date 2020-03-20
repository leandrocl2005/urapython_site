import React, { Component } from 'react';

export default class ArrowButton extends Component {
  render = () => (
    <div className="tm-next tm-intro-next">
      <a href={this.props.to} className="text-center tm-down-arrow-link">
        <i className="fas fa-2x fa-arrow-down tm-down-arrow"></i>
      </a>
    </div>
  );
}
