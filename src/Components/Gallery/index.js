import React, { Component } from 'react';
import Header from './Header';
import Figure from './Figure';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesDict: [
        {
          id: 1,
          href: 'img/gallery-img-01.jpg',
          src: 'img/gallery-img-01.jpg',
          alt: '1',
          figcaption: () => (
            <h2>
              <i>
                Physical Health <span>Exercise!</span>
              </i>
            </h2>
          ),
        },
        {
          id: 2,
          href: 'img/gallery-img-02.jpg',
          src: 'img/gallery-img-02.jpg',
          alt: '2',
          figcaption: () => (
            <h2>
              <i>
                Rain on Glass <span>Second Image</span>
              </i>
            </h2>
          ),
        },
        {
          id: 3,
          href: 'img/gallery-img-03.jpg',
          src: 'img/gallery-img-03.jpg',
          alt: '3',
          figcaption: () => (
            <h2>
              <i>
                <span>Sea View</span> Mega City
              </i>
            </h2>
          ),
        },
        {
          id: 4,
          href: 'img/gallery-img-04.jpg',
          src: 'img/gallery-img-04.jpg',
          alt: '4',
          figcaption: () => (
            <h2>
              <i>
                Dream Girl <span>Thoughts</span>
              </i>
            </h2>
          ),
        },
        {
          id: 5,
          href: 'img/gallery-img-05.jpg',
          src: 'img/gallery-img-05.jpg',
          alt: '5',
          figcaption: () => (
            <h2>
              <i>
                <span>Workstation</span> Offices
              </i>
            </h2>
          ),
        },
        {
          id: 6,
          href: 'img/gallery-img-06.jpg',
          src: 'img/gallery-img-06.jpg',
          alt: '6',
          figcaption: () => (
            <h2>
              <i>
                Just Above <span>The City</span>
              </i>
            </h2>
          ),
        },
        {
          id: 7,
          href: 'img/gallery-img-01.jpg',
          src: 'img/gallery-img-01.jpg',
          alt: '7',
          figcaption: () => (
            <h2>
              <i>
                Another <span>Exercise Time</span>
              </i>
            </h2>
          ),
        },
        {
          id: 8,
          href: 'img/gallery-img-02.jpg',
          src: 'img/gallery-img-02.jpg',
          alt: '8',
          figcaption: () => (
            <h2>
              <i>
                Repeated <span>Image Spot</span>
              </i>
            </h2>
          ),
        },
      ],
    };
  }

  render = () => (
    <section id="gallery" class="tm-section-pad-top">
      <div class="container tm-container-gallery">
        <div className="row">
          <div className="text-center col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mx-auto tm-gallery-container">
              <div className="grid tm-gallery">
                {this.state.imagesDict.map(item => (
                  <Figure key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
