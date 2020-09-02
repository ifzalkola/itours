import React from "react";

import "./tour-overview.scss";

const TourDescription = ({ locations, photos }) => {
  return (
    <React.Fragment>
      {photos.map((photo, index) => {
        return (
          <div className="tour-description">
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
const TourOverview = () => {
  const { name, coverPhoto, photos, locations, tourDescription } = {
    name: "The Lovely Paris",
    price: 75000,
    duration: 5,
    coverPhoto: "paris-cover-photo.jpg",
    photos: [
      "louvre-palace.jpg",
      "arc-de-triomphe.jpg",
      "disneyland.jpg",
      "chateau-de-chambord.jpg",
      "eiffel-tower.jpg",
    ],
    locations: [
      {
        locationName: "Louvre Palace",
        locationDescription:
          "Originally a fortress built in the medieval period, it became a royal palace in the fourteenth century under Charles V and was used from time to time by the kings of France as their main Paris residence. Its present structure has evolved in stages since the 16th century",
        locationPoint: {
          type: "Point",
          coordinates: [2.3340148, 48.8603289],
        },
      },
      {
        locationName: "Arc de Triomphe",
        locationDescription:
          "The Arc de Triomphe de l'Étoile is one of the most famous monuments in Paris, France, standing at the western end of the Champs-Élysées at the centre of Place Charles de Gaulle, formerly named Place de l'Étoile—the étoile or 'star' of the juncture formed by its twelve radiating avenues.",
        locationPoint: {
          type: "Point",
          coordinates: [2.295, 48.8738],
        },
      },
      {
        locationName: "Disneyland Paris",
        locationDescription:
          "Disneyland Paris, formerly Euro Disney Resort, is an entertainment resort in Chessy, France, a new town located 32 km (20 mi) east of the centre of Paris. It encompasses two theme parks, many resort hotels, Disney Nature Resorts, a shopping, dining, and entertainment complex, and a golf course, in addition to several additional recreational and entertainment venues.",
        locationPoint: {
          type: "Point",
          coordinates: [2.7912, 48.8616],
        },
      },
      {
        locationName: "Château de Chambord",
        locationDescription:
          "The Château de Chambord in Chambord, Loir-et-Cher, France, is one of the most recognisable châteaux in the world because of its very distinctive French Renaissance architecture which blends traditional French medieval forms with classical Renaissance structures.",
        locationPoint: {
          type: "Point",
          coordinates: [1.5121669, 47.6174852],
        },
      },
      {
        locationName: "Eiffel Tower",
        locationDescription:
          "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
        locationPoint: {
          type: "Point",
          coordinates: [2.2945, 48.8584],
        },
      },
    ],
    tourDescription:
      "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
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
    </div>
  );
};
export default TourOverview;
