import React, { Component } from 'react';

export default class RedirectButton extends Component {
  render = () => (
    <div className="tm-continue">
      <a href={this.props.to} className="tm-intro-text tm-btn-primary">
        {this.props.text}
      </a>
    </div>
  );
}
