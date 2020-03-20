import React, { Component } from 'react';

export default class Form extends Component {
  render = () => (
    <div className="col-sm-12 col-md-6">
      <form action="" method="get">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          className="tm-input"
          required
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          className="tm-input"
          required
        />
        <textarea
          id="message"
          name="message"
          rows="8"
          placeholder="Message"
          className="tm-input"
          required
        ></textarea>
        <button type="submit" className="btn tm-btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
}
