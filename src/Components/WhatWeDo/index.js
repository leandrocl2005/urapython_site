import React, { Component } from 'react';
import WhatWeDoTitle from './WhatWeDoTitle';
import OfferedService from './OfferedService';

export default class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col1: [],
      col2: [],
      offeredServices: [
        {
          id: 0,
          title: 'Market Analysis',
          content: () => (
            <>
              Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare
              elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est
              urna.
            </>
          ),
          to: '',
          text: '',
        },
        {
          id: 1,
          title: 'Fast Support',
          content: () => (
            <>
              Credit goes to{' '}
              <a rel="nofollow" href="https://www.pexels.com">
                Pexels
              </a>{' '}
              website for all images used in this template. Cras condimentum mi
              et sapien dignissim luctus.
            </>
          ),
          to: '',
          text: '',
        },
        {
          id: 2,
          title: 'Top Security',
          content: () => (
            <>
              You have <strong>no</strong> authority to post this template as a
              ZIP file on your template collection websites. You can{' '}
              <strong>use</strong> this template for your commercial websites.
            </>
          ),
          to: '#testimonials',
          text: 'Learn More',
        },
        {
          id: 3,
          title: 'Social Work',
          content: () => (
            <>
              You can change{' '}
              <a href="https://fontawesome.com/icons?d=gallery">
                Font Awesome icons
              </a>{' '}
              by either{' '}
              <b>
                <em>fas or far</em>
              </b>{' '}
              in the HTML codes. For Examples:
              <br />
              <em>
                &lt;i class=&quot;fas fa-users&quot;&gt;&lt;i class=&quot;far
                fa-chart-bar&quot;&gt;
              </em>
            </>
          ),
          to: '#testimonials',
          text: 'Details',
        },
      ],
    };
  }

  render = () => (
    <section id="whatwedo" class="tm-section-pad-top">
      <div className="container">
        <div className="row tm-content-box">
          <WhatWeDoTitle />
        </div>

        <div className="row tm-content-box">
            {this.state.offeredServices.filter(
              item => item.id % 2 === 0
            ).map(item =>
              <OfferedService
                key = {item.id}
                title={item.title}
                content={item.content()}
                to={item.to}
                text={item.text}
              />
            )}
            {this.state.offeredServices.filter(
              item => item.id % 2 === 1
            ).map(item =>
              <OfferedService
                key = {item.id}
                title={item.title}
                content={item.content()}
                to={item.to}
                text={item.text}
              />
            )}
        </div>
      </div>
    </section>
  );
}
