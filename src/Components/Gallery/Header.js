import React, { Component } from 'react';

export default class Header extends Component {
  render = () => (
    <>
      <h2 className="tm-text-primary tm-section-title mb-4">Gallery</h2>
      <p className="mx-auto tm-section-desc">
        Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac
        metus lacinia, sed iaculis nibh semper. Pellentesque est urna, lobortis
        eu arcu a, aliquet tristique urna.
      </p>
    </>
  );
}
