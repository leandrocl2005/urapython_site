import React, { Component } from 'react';
import RedirectButton from './RedirectButton';

export default class OfferedService extends Component {
  render = () => (
    <>
      <div className="col-lg-1">
        <i className="far fa-3x fa-chart-bar text-center tm-icon"></i>
      </div>
      <div className="col-lg-5">
        <div className="tm-intro-text-container">
          <h2 className="tm-text-primary mb-4">{this.props.title}</h2>
          <p className="mb-4 tm-intro-text">{this.props.content}</p>
          {this.props.to && (
            <RedirectButton to={this.props.to} text={this.props.text} />
          )}
        </div>
      </div>
    </>
  );
}
