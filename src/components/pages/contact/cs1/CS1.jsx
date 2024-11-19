import React from 'react';
import './cs1.css';

// Contact card data
const contactCards = [
  {
    title: 'Contact Sales',
    description: 'Get in touch with a product specialist.',
    href: '',
  },
  {
    title: 'Email Media',
    description: 'For all press inquiries about Xemsoft.',
    href: '',
  },
  {
    title: 'Email Partners',
    description: 'Support for consultants, systems integrators & agencies.',
    href: '',
  },
  {
    title: 'Email General',
    description: 'For general inquiries about Xemsoft.',
    href: '',
  },
  {
    title: 'Email Accounts Receivable',
    description: 'For billing inquiries.',
    href: '',
  },
  {
    title: 'Submit a Support Ticket',
    description: 'To submit a ticket, users must log in to their accounts',
    href: '',
  },
];

const ContactCard = ({ title, description, href }) => (
  <a
    id="cs1__a"
    href={href}
    className="cs1__b58__card-wrapper cs1__w-inline-block"
  >
    <div className="cs1__b58__card-left-col">
      <div className="cs1__text__display-small">{title}</div>
      <div>{description}</div>
    </div>
    <div className="cs1__b58__card-link-block">
      <div>→</div>
    </div>
  </a>
);

const CS1 = () => {
  return (
    <section className="cs1__section">
      <div className="cs1__spacer__48"></div>
      <div className="cs1__contain">
        <div className="cs1__b58">
          <h2 className="cs1__text__display-large">Contact Us</h2>
          <div className="cs1__w-layout-grid cs1__b58__cards-grid">
            {contactCards.map((card, index) => (
              <ContactCard
                key={index}
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))}
            <div className="cs1__b58__more-information-wrapper">
              <div>
                <span className="cs1__text__medium-weight">US & Canada: </span>
                <a href="tel:+1(415)805-2799">+1 (415) 805-2799</a>
              </div>
              <div>
                <span className="cs1__text__medium-weight">Hours:</span> 8am PST
                - 3pm PST
              </div>
            </div>
            <div className="cs1__b58__more-information-wrapper">
              <div>
                <span className="cs1__text__medium-weight">
                  EU, Middle East & Africa:{' '}
                </span>
                <a href="tel:+3530866078650">+353 086 607 8650</a>
              </div>
              <div>
                <span className="cs1__text__medium-weight">Hours:</span> 9am GMT
                - 5pm GMT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs1__spacer__48"></div>
    </section>
  );
};

export default CS1;
