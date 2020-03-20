import React, { Component } from 'react';

export default class ContactItem extends Component {
  render = () => (
    <div className="contact-item">
      <a rel="nofollow" href={this.props.href} className="item-link">
        <i className={this.props.icon}></i>
        <span className="mb-0">{this.props.span}</span>
      </a>
    </div>
  );
}
