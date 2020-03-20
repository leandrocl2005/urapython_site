import React, { Component } from 'react';

export default class Footer extends Component {
  render = () => (
    <footer className="text-center small tm-footer">
      <p className="mb-0">
        Copyright &copy; 2020 Company Name .{' '}
        <a
          rel="nofollow"
          href="https://www.tooplate.com"
          title="HTML templates"
        >
          Designed by TOOPLATE
        </a>
      </p>
    </footer>
  );
}
