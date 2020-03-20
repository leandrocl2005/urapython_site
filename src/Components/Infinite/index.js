import React, { Component } from 'react';
import Navbar from './Navbar';
import HomePageTitle from './HomePageTitle';
import ArrowButton from './ArrowButton';

export default class Infinite extends Component {
  render = () => (
    <section id="infinite" className="text-white tm-font-big tm-parallax">
      <Navbar />
      <HomePageTitle />
      <ArrowButton to="#whatwedo" />
    </section>
  );
}
