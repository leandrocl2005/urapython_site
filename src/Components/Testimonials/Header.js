import React, { Component } from 'react';

export default class Header extends Component {
  render = () => (
    <>
      <h2 className="text-white text-center mb-4 tm-section-title">
        Testimonials
      </h2>
      <p className="mx-auto tm-section-desc text-center">
        Nulla dictum sem non eros euismod, eu placerat tortor lobortis.
        Suspendisse id velit eu libero pellentesque interdum. Etiam quis congue
        eros.
      </p>
    </>
  );
}
