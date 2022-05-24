import React from 'react';
import './Destinations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Destinations(props) {
  const cards = props.dest;
  const locationDot = <FontAwesomeIcon icon={faLocationDot} />;
  const googleLabel = 'View on Google Maps';

  return (
    <div className="destinations">
      {cards.map((card) => {
        return (
          <div className="destination">
            <div className="img-container">
              <img
                className="img-dest"
                src={card.image}
                height="275rem"
                width="200rem"
              />
            </div>
            <div className="meta-data">
              <p>
                <span className="location-dot">{locationDot} </span>
                {'  '}
                <span className="country">
                  {card.country} {'   '}
                </span>
                <span className="google-label">{googleLabel}</span>
              </p>
              <h1 className="location">{card.location}</h1>
              <p className="date">{card.date}</p>
              <p className="description">{card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Destinations;
