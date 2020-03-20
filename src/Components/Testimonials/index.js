import React, { Component } from 'react';
import Figure from './Figure';
import Header from './Header';

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesDict: [
        {
          id: 1,
          src: 'img/testimonial-img-01.jpg',
          blockquote:
            'This background image includes a semi-transparent overlay layer. This section also has a parallax image effect.',
          figcaption: 'Catherine Win (Designer)',
        },
        {
          id: 2,
          src: 'img/testimonial-img-02.jpg',
          blockquote:
            'Testimonial section comes with carousel items. You can use Infinite Loop HTML CSS template for your websites.',
          figcaption: 'Dual Rocker (CEO)',
        },
        {
          id: 3,
          src: 'img/testimonial-img-03.jpg',
          blockquote:
            'Nulla finibus ligula nec tortor convallis tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          figcaption: 'Sandar Soft (Marketing)',
        },
        {
          id: 4,
          src: 'img/testimonial-img-04.jpg',
          blockquote:
            'Curabitur rutrum pharetra lobortis. Pellentesque vehicula, velit quis eleifend fermentum, erat arcu aliquet neque.',
          figcaption: 'Oliva Htoo (Designer)',
        },
        {
          id: 5,
          src: 'img/testimonial-img-02.jpg',
          blockquote:
            'Integer sit amet risus et erat imperdiet finibus. Nam lacus nunc, vulputate id ex eget, euismod auctor augue.',
          figcaption: 'Jacob Joker (CTO)',
        },
      ],
    };
  }
  render = () => (
    <section id="testimonials" className="tm-section-pad-top tm-parallax-2">
      <div className="container tm-testimonials-content">
        <div className="row">
          <div className="col-lg-12 tm-content-box">
            <Header />
            <div className="mx-auto tm-gallery-container tm-gallery-container-2">
              <div className="tm-testimonials-carousel">
                {this.state.imagesDict.map(item => (
                  <Figure
                    key={item.id}
                    src={item.src}
                    blockquote={item.blockquote}
                    figcaption={item.figcaption}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
