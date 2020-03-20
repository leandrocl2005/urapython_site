import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';
import ContactItem from './ContactItem';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsDict: [
        {
          id: 'chat',
          href: 'https://www.tooplate.com/contact',
          icon: 'far fa-2x fa-comment mr-4',
          span: 'Chat Online',
        },
        {
          id: 'email',
          href: 'mailto:mail@company.com',
          icon: 'far fa-2x fa-envelope mr-4',
          span: 'mail@company.com',
        },
        {
          id: 'location',
          href: 'https://www.google.com/maps',
          icon: 'fas fa-2x fa-map-marker-alt mr-4',
          span: 'Our Location',
        },
        {
          id: 'cellphone',
          href: 'tel:0100200340',
          icon: 'fas fa-2x fa-phone-square mr-4',
          span: '255-662-5566',
        },
      ],
    };
  }
  render = () => (
    <section id="contact" class="tm-section-pad-top tm-parallax-2">
      <div className="container tm-container-contact">
        <div className="row">
          <Header />
          <Form />
          <div className="col-sm-12 col-md-6">
            {this.state.contactsDict.map(item => (
              <ContactItem
                key={item.id}
                href={item.href}
                icon={item.icon}
                span={item.span}
              />
            ))}
            <div className="contact-item">&nbsp;</div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
