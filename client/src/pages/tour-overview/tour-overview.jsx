import React from 'react';

import './tour-overview.scss';
import MapBox from '../../components/map/map';

const TourDescription = ({ locations, photos }) => {
  let key = 123;
  return (
    <React.Fragment key={key++}>
      {photos.map((photo, index) => {
        return (
          <div className="tour-description" key={key++}>
            <div
              className="photo"
              style={{ backgroundImage: `url('./images/tours/${photo}')` }}
            >
              <span className="location-name">
                {locations[index].locationName}
              </span>
            </div>
            <div className="description">
              {locations[index].locationDescription}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};
const TourOverview = props => {
  const { name, coverPhoto, photos, locations, tourDescription } = {
    name: 'The Voluptuous Venice',
    price: 50000,
    duration: 4,
    coverPhoto: 'venice-cover-photo.jpg',
    photos: [
      'grand-canal.jpg',
      'venetian-lagoon.jpg',
      'st-marks-square.jpg',
      'bridge-of-sighs.jpg'
    ],
    locations: [
      {
        locationName: 'Grand Canal',
        locationDescription:
          'Canale Grande or Grand Canal is the most important icon of Venice- lined with gorgeous and vibrant looking palaces and castles on both sides. The canal is one of the best places to visit in Venice and meanders through the city in a zigzag way with a few breathtaking bridges built over it',
        locationPoint: {
          type: 'Point',
          coordinates: [12.316877, 45.4373305]
        }
      },
      {
        locationName: 'Venetian Lagoon',
        locationDescription:
          "The Venetian Lagoon is an enclosed bay of the Adriatic Sea, in northern Italy, in which the city of Venice is situated. Its name in the Italian and Venetian languages, Laguna Veneta—cognate of Latin lacus, 'lake'—has provided the English name for an enclosed, shallow embayment of salt water, a lagoon.",
        locationPoint: {
          type: 'Point',
          coordinates: [12.276356, 45.3761216]
        }
      },
      {
        locationName: "St Mark's Square",
        locationDescription:
          "St Mark's Square is the most crowded public square and one of the most happening places to visit in Venice, located in front of St. Mark’s Basilica and Doge’s Palace. The square is separated from the palace by a small inland waterway, known as the Rio Batario. This is the place where all the government buildings and other offices are located in Venice. It is no doubt one of the best places to visit in Venice.",
        locationPoint: {
          type: 'Point',
          coordinates: [12.3375331, 45.4341568]
        }
      },
      {
        locationName: 'Bridge of Sighs',
        locationDescription:
          "The Bridge of Sighs is a bridge in Venice, Italy. The enclosed bridge is made of white limestone, has windows with stone bars, passes over the Rio di Palazzo, and connects the New Prison to the interrogation rooms in the Doge's Palace. It was designed by Antonio Contino, whose uncle Antonio da Ponte designed the Rialto Bridge, and it was built in 1600",
        locationPoint: {
          type: 'Point',
          coordinates: [12.3397601, 45.4340515]
        }
      }
    ],
    tourDescription:
      'The floating city of Venice looks like a picture postcard with crisscrossing canals, marvelous castles, ancient museums, cathedrals, art galleries, churches, and public squares. The attractions make for the most preferred and best places to visit in Venice and cast a fervent charm on the tourists. One of the most frequented places by the lovebirds, Venice is truly a charmer attracting millions of tourist round the year'
  };
  return (
    <div className="tour-overview">
      <div className="showcase">
        <div
          className="cover-photo"
          style={{ backgroundImage: `url('./images/tours/${coverPhoto}')` }}
        >
          &nbsp;
        </div>
        <span className="tour-name">{name}</span>
      </div>
      <h2>City Description</h2>
      <div className="city-description">{tourDescription}</div>
      <h2>Places to visit</h2>
      <div className="tours-description">
        <TourDescription photos={photos} locations={locations} />
      </div>
      <MapBox locations={locations} />
      <div className="booking-label">
        <h2>Want To Visit Exotic Places?</h2>
        <button>Book Now!</button>
      </div>
    </div>
  );
};
export default TourOverview;
