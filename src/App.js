import React, { Component } from 'react';
import Infinite from './Components/Infinite';
import WhatWeDo from './Components/WhatWeDo';
import Testimonials from './Components/Testimonials';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

export default class App extends Component {
  render = () => (
    <>
      <Infinite />
      <WhatWeDo />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
