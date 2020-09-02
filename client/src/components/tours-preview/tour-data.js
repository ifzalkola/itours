const TOUR_DATA = [
  {
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
  },
  {
    name: "The Astonishing London",
    price: 65000,
    duration: 5,
    coverPhoto: "london-cover-photo.jpg",
    photos: [
      "british-museum.jpg",
      "tower-bridge.jpg",
      "buckingham-palace.jpg",
      "trafalgar-square.jpg",
      "ZSL-London-Zoo.jpg",
    ],
    locations: [
      {
        locationName: "The British Museum",
        locationDescription:
          "British Museum Co Ltd operates as a museum. The company was founded in 1972 and is based in London, United Kingdom. It was formerly known as British Museum Publications Limited and changed its name in 1995. British Museum Co Ltd operates as a subsidiary of The Trustees Of The British Museum.",
        locationPoint: {
          type: "Point",
          coordinates: [-0.1277426, 51.5188699],
        },
      },
      {
        locationName: "Tower Bridge",
        locationDescription:
          "Tower Bridge is a combined bascule and suspension bridge in London, built between 1886 and 1894. The bridge crosses the River Thames close to the Tower of London and has become an iconic symbol of London. As a result, it is sometimes confused with London Bridge, about half a mile upstream.",
        locationPoint: {
          type: "Point",
          coordinates: [-0.0775452, 51.5054597],
        },
      },
      {
        locationName: "Buckingham Palace",
        locationDescription:
          "Buckingham Palace is the London residence and administrative headquarters of the monarchy of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning",
        locationPoint: {
          type: "Point",
          coordinates: [-0.1440787, 51.5013673],
        },
      },
      {
        locationName: "Trafalgar Square",
        locationDescription:
          "Trafalgar Square is a public square in the City of Westminster, Central London, built around the area formerly known as Charing Cross. Its name commemorates the Battle of Trafalgar, the British naval victory in the Napoleonic Wars over France and Spain that took place on 21 October 1805 off the coast of Cape Trafalgar",
        locationPoint: {
          type: "Point",
          coordinates: [-0.1291379, 51.5080917],
        },
      },
      {
        locationName: "ZSL London Zoo",
        locationDescription:
          "London Zoo is the world's oldest scientific zoo. It was opened in London on 27 April 1828, and was originally intended to be used as a collection for scientific study. In 1831 or 1832, the animals of the Tower of London menagerie were transferred to the zoo's collection. It was opened to the public in 1847. Today, it houses a collection of 673 species of animals, with 19,289 individuals, making it one of the largest collections in the United Kingdom",
        locationPoint: {
          type: "Point",
          coordinates: [-0.155619, 51.5352908],
        },
      },
    ],
    tourDescription:
      "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
  },
  {
    name: "The Stunning New York",
    price: 70000,
    duration: 5,
    coverPhoto: "newyork-cover-photo.jpg",
    photos: [
      "central-park.jpg",
      "statue-of-liberty.jpg",
      "empire-state.jpg",
      "metropolitan-museum.jpg",
      "times-square.jpg",
    ],
    locations: [
      {
        locationName: "Central Park",
        locationDescription:
          "Central Park is an urban park in New York City, located between the Upper West and Upper East Sides of Manhattan. It is the fifth-largest park in the city by area, covering 843 acres. The park is the most visited urban park in the United States, with an estimated 38 million visitors annually, and is the most filmed location in the world.",
        locationPoint: {
          type: "Point",
          coordinates: [-73.9687025, 40.7812239],
        },
      },
      {
        locationName: "Statue of Liberty",
        locationDescription:
          "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel. The statue is a figure of Libertas, a robed Roman liberty goddess",
        locationPoint: {
          type: "Point",
          coordinates: [-74.0466891, 40.6892534],
        },
      },
      {
        locationName: "Empire State Building",
        locationDescription:
          "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan in New York City. It was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. The Empire State Building stood as the world's tallest building until the construction of the World Trade Center in 1970",
        locationPoint: {
          type: "Point",
          coordinates: [-73.9879522, 40.7485492],
        },
      },
      {
        locationName: "The Metropolitan Museum of Art",
        locationDescription:
          "The Metropolitan Museum of Art maintains a museum and library of art in the City of New York. Its main collections include arms and armor, ancient Near Eastern art, Asian art, costumes, drawings and prints, European sculpture and decorative arts, Greek and Roman art, Islamic art, medieval art, modern and contemporary art, musical instruments, photographs, and the Robert Lehman Collection, as well as the arts of Africa, Oceania, and the Americas",
        locationPoint: {
          type: "Point",
          coordinates: [-73.9654327, 40.7794406],
        },
      },
      {
        locationName: "Times Square",
        locationDescription:
          "Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan section of New York City, at the junction of Broadway and Seventh Avenue. Brightly lit by numerous billboards and advertisements, it stretches from West 42nd to West 47th Streets, and is sometimes referred to as 'the heart of the world'. One of the world's busiest pedestrian areas.",
        locationPoint: {
          type: "Point",
          coordinates: [-73.9877574, 40.7580053],
        },
      },
    ],
    tourDescription:
      "The All Around Town Tour is the one way to see NYC in all its glory! With this all-inclusive tour package, you'll experience the magic of New York City's many renowned landmarks and neighborhoods, plus have the chance to visit a brand new attraction! Take in stunning views of NYC from the One World Observatory",
  },
  {
    name: "The Gorgeous Kashmir",
    price: 50000,
    duration: 5,
    coverPhoto: "kashmir-cover-photo.jpg",
    photos: [
      "srinagar.jpg",
      "gulmarg.jpg",
      "leh.jpg",
      "pahalgam.jpg",
      "patnitop.jpg",
    ],
    locations: [
      {
        locationName: "Srinagar",
        locationDescription:
          "Srinagar is undoubtedly one of the most beautiful and famous places to visit in Kashmir as well as in India. From boating to trekking, bird watching to water skiing, Srinagar place has it all. Locally this place is known as the mirror to the mountains, Srinagar is the first stopover for every traveler.",
        locationPoint: {
          type: "Point",
          coordinates: [74.6666673, 34.1069233],
        },
      },
      {
        locationName: "Gulmarg",
        locationDescription:
          "Famously known as the ‘Meadow of Flowers’, Gulmarg is a treat to the eyes with its spread of vibrant flowers against snow capped mountains as backgrounds. Gulmarg is considered to be one of the best places to visit in Kashmir for all right reasons. This region of Kashmir is also known as the adventurer’s paradise because of its vast options of skiing in the snow while enjoying the views around",
        locationPoint: {
          type: "Point",
          coordinates: [74.3555314, 34.0506694],
        },
      },
      {
        locationName: "Leh",
        locationDescription:
          "Leh is one of the best and safe places to visit in Kashmir in summers. The lofty mountains, the alpine lakes, and the quaint settings enable Leh one of the best places to visit. This place is every biker’s dreamland. Clad in the beauty and love of nature, Leh offers breathtaking views, leaving no visitor disappointed",
        locationPoint: {
          type: "Point",
          coordinates: [77.5037447, 34.1672777],
        },
      },
      {
        locationName: "Pahalgam",
        locationDescription:
          "Pahalgam is considered as an illustration of the heaven on earth which is situated at an altitude of 2740 m. It is situated at distance of 95 Kms from Srinagar and surrounded by dense forests, beautiful lakes and meadows of flowers. Tranquility and serenity are the other names of Pahalgam. This tiny town is known to suck out all the stress of every visitor and is therefore counted amongst the best places to visit in Kashmir",
        locationPoint: {
          type: "Point",
          coordinates: [75.2806048, 34.0104712],
        },
      },
      {
        locationName: "Patnitop",
        locationDescription:
          "Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan section of New York City, at the junction of Broadway and Seventh Avenue. Brightly lit by numerous billboards and advertisements, it stretches from West 42nd to West 47th Streets, and is sometimes referred to as 'the heart of the world'. One of the world's busiest pedestrian areas.",
        locationPoint: {
          type: "Point",
          coordinates: [75.2952189, 33.0815728],
        },
      },
    ],
    tourDescription:
      "Enclosed by the snow-clad mountains and the gleaming lakes creates a picturesque landscape on earth which is known as Kashmir. This state of India is precisely divided into three regions namely Jammu, Kashmir, and Ladakh which is covered by the mighty ranges of the Great Himalayas and Pir Panjal range. Due to the various picturesque places to visit in Kashmir, it is often referred as India’s Switzerland, as the place is blessed with the most scenic views which are worth a visit",
  },
  {
    name: "The Tantalizing Istanbul",
    price: 60000,
    duration: 4,
    coverPhoto: "istanbul-cover-photo.jpg",
    photos: [
      "kilyos.jpg",
      "belgrud-ormani.jpg",
      "fortress.jpg",
      "blue-mosque.jpg",
    ],
    locations: [
      {
        locationName: "Kilyos",
        locationDescription:
          "Kilyos, a coastal resort on the northern coast of Istanbul is a wonderful get away from sun-seekers and revelers. Its beaches with long and beautiful sandy bay are a perfect foil for the young. If you are a music buff and a DJ fan, Kilyos is the ideal one day trip from Istanbul for you. The tranquil beach town of Kilyos is stage for DJ performers from all over the world during the summer months..",
        locationPoint: {
          type: "Point",
          coordinates: [29.0216737, 41.2451932],
        },
      },
      {
        locationName: "Belgrad Ormani",
        locationDescription:
          "Belgrad Ormani (literally meaning Belgrad forest) is at the edge of the Istanbul city. Spread over an imposing 5,000 acres of land, Belgrad Ormani provides scenic woodlands, dams of Ottoman empire, streams and historic sites. With some excellent hikes in the area, presence of serene and calm natural spaces makes a trip to Belgrad Ormani a truly memorable one",
        locationPoint: {
          type: "Point",
          coordinates: [28.7411585, 41.2500447],
        },
      },
      {
        locationName: "Kilitbahir Fortress",
        locationDescription:
          "Known to be built by Sultan Mehmet in 1463, this incredible fortress lies on the other side of Canakkale. It was envisaged as a defensive project to defend the waters leading to Istanbul. Tourists can enjoy a panoramic view of the strait of Dardanelles after they get on to the highest point of the fort. Kilitbahir is also home to a large port worth visiting",
        locationPoint: {
          type: "Point",
          coordinates: [26.3769688, 40.1506272],
        },
      },
      {
        locationName: "The Blue Mosque",
        locationDescription:
          "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb, a madrasah and a hospice",
        locationPoint: {
          type: "Point",
          coordinates: [28.9746251, 41.0054136],
        },
      },
    ],
    tourDescription:
      "Istanbul is one of the big cities of Turkey and spreads across Europe and Asia on the Bosphorus Strait. the city is historically known as Byzantium and Constantinople. Istanbul has a very rich history and culture and various destinations for tourists to visit and see and because this city is so famous and packed with things to see and do, it sometimes overshadows the numerous cities and attractions that are near the city or around it",
  },
  {
    name: "The Orthodox Jaipur",
    price: 50000,
    duration: 5,
    coverPhoto: "jaipur-cover-photo.jpg",
    photos: [
      "amber-palace.jpg",
      "jal-mahal.jpg",
      "city-palace.jpg",
      "hawa-mahal.jpg",
      "nahargarh-fort.jpg",
    ],
    locations: [
      {
        locationName: "Amber Palace",
        locationDescription:
          "Amer Fort or Amber Fort is a fort located in Amer, Rajasthan, India. Amer is a town with an area of 4 square kilometres located 11 kilometres from Jaipur, the capital of Rajasthan. The town of Amer and the Amber Fort were originally built by the Meenas, and later it was ruled by Raja Man Singh I. Located high on a hill, it is the principal tourist attraction in Jaipur. Amer Fort is known for its artistic style elements.",
        locationPoint: {
          type: "Point",
          coordinates: [75.8491567, 26.9854913],
        },
      },
      {
        locationName: "Jal Mahal",
        locationDescription:
          "Jal Mahal is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace and the lake around it were renovated and enlarged in the 18th century by Maharaja Jai Singh II of Amber",
        locationPoint: {
          type: "Point",
          coordinates: [75.8339699, 26.9649637],
        },
      },
      {
        locationName: "City Palace",
        locationDescription:
          "The City Palace, Jaipur was established at the same time as the city of Jaipur, by Maharaja Sawai Jai Singh II, who moved his court to Jaipur from Amber, in 1727. Jaipur is the present-day capital of the state of Rajasthan, and until 1949 the City Palace was the ceremonial and administrative seat of the Maharaja of Jaipur.",
        locationPoint: {
          type: "Point",
          coordinates: [75.8214694, 26.9257761],
        },
      },
      {
        locationName: "Hawa Mahal",
        locationDescription:
          "Hawa Mahal is a palace in Jaipur, India. Built from red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. The structure was built in 1799 by Maharaja Sawai Pratap Singh, the grandson of Maharaja Sawai Jai Singh, who was the founder of Jaipur",
        locationPoint: {
          type: "Point",
          coordinates: [75.8245551, 26.9239411],
        },
      },
      {
        locationName: "Nahargarh Fort",
        locationDescription:
          "Nahargarh Fort stands on the edge of the Aravalli Hills, overlooking the city of Jaipur in the Indian state of Rajasthan. Along with Amer Fort and Jaigarh Fort, Nahargarh once formed a strong defense ring for the city. The fort was originally named sudarshangarh, but it became known as Nahargarh, which means 'abode of tigers'.",
        locationPoint: {
          type: "Point",
          coordinates: [75.8133372, 26.9373175],
        },
      },
    ],
    tourDescription:
      "Jaipur, the capital of the North Indian State of Rajasthan, is named after its founder Maharaja Jai Singh II (1693-1743). The city is surrounded by hills and dotted with forts. Houses with pink latticed windows line the streets, and look almost magical at sunset",
  },
  {
    name: "The Voluptuous Venice",
    price: 50000,
    duration: 4,
    coverPhoto: "venice-cover-photo.jpg",
    photos: [
      "grand-canal.jpg",
      "venetian-lagoon.jpg",
      "st-marks-square.jpg",
      "bridge-of-sighs.jpg",
    ],
    locations: [
      {
        locationName: "Grand Canal",
        locationDescription:
          "Canale Grande or Grand Canal is the most important icon of Venice- lined with gorgeous and vibrant looking palaces and castles on both sides. The canal is one of the best places to visit in Venice and meanders through the city in a zigzag way with a few breathtaking bridges built over it",
        locationPoint: {
          type: "Point",
          coordinates: [12.316877, 45.4373305],
        },
      },
      {
        locationName: "Venetian Lagoon",
        locationDescription:
          "The Venetian Lagoon is an enclosed bay of the Adriatic Sea, in northern Italy, in which the city of Venice is situated. Its name in the Italian and Venetian languages, Laguna Veneta—cognate of Latin lacus, 'lake'—has provided the English name for an enclosed, shallow embayment of salt water, a lagoon.",
        locationPoint: {
          type: "Point",
          coordinates: [12.1101771, 45.3761216],
        },
      },
      {
        locationName: "St Mark's Square",
        locationDescription:
          "St Mark's Square is the most crowded public square and one of the most happening places to visit in Venice, located in front of St. Mark’s Basilica and Doge’s Palace. The square is separated from the palace by a small inland waterway, known as the Rio Batario. This is the place where all the government buildings and other offices are located in Venice. It is no doubt one of the best places to visit in Venice.",
        locationPoint: {
          type: "Point",
          coordinates: [12.3375331, 45.4341568],
        },
      },
      {
        locationName: "Bridge of Sighs",
        locationDescription:
          "The Bridge of Sighs is a bridge in Venice, Italy. The enclosed bridge is made of white limestone, has windows with stone bars, passes over the Rio di Palazzo, and connects the New Prison to the interrogation rooms in the Doge's Palace. It was designed by Antonio Contino, whose uncle Antonio da Ponte designed the Rialto Bridge, and it was built in 1600",
        locationPoint: {
          type: "Point",
          coordinates: [12.3397601, 45.4340515],
        },
      },
    ],
    tourDescription:
      "The floating city of Venice looks like a picture postcard with crisscrossing canals, marvelous castles, ancient museums, cathedrals, art galleries, churches, and public squares. The attractions make for the most preferred and best places to visit in Venice and cast a fervent charm on the tourists. One of the most frequented places by the lovebirds, Venice is truly a charmer attracting millions of tourist round the year",
  },
  {
    name: "The Glamorous Dubai",
    price: 40000,
    duration: 4,
    coverPhoto: "dubai-cover-photo.jpg",
    photos: [
      "burj-al-arab.jpg",
      "palm-islands.jpg",
      "burj-khalifa.jpg",
      "desert-safari.jpg",
    ],
    locations: [
      {
        locationName: "Burj Al Arab",
        locationDescription:
          "The Burj Al Arab is a luxurious 5 star hotel located in the city of Dubai, United Arab Emirates.[7] One of the tallest hotels in the world, it is the seventh tallest, although 39% of its total height is made up of non-occupiable space. Burj Al Arab stands on an artificial island 280 m (920 ft) from Jumeirah Beach and is connected to the mainland by a private curving bridge.",
        locationPoint: {
          type: "Point",
          coordinates: [55.183884, 25.1415573],
        },
      },
      {
        locationName: "Palm Islands",
        locationDescription:
          "Palm Islands are three artificial islands, Palm Jumeirah, Deira Island and Palm Jebel Ali, on the coast of Dubai, United Arab Emirates. Creation of the islands started in 2001.s",
        locationPoint: {
          type: "Point",
          coordinates: [54.9836903, 25.0580669],
        },
      },
      {
        locationName: "Burj Khalifa",
        locationDescription:
          "The Burj Khalifa, known as the Burj Dubai prior to its inauguration in 2010, is a skyscraper in Dubai, United Arab Emirates. With a total height of 829.8 m and a roof height of 828 m, the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009",
        locationPoint: {
          type: "Point",
          coordinates: [55.2721877, 25.1972018],
        },
      },
      {
        locationName: "Desert Safari",
        locationDescription:
          "Dubai desert safari in the surrounding sandy desert is a thrilling and electrifying experience. ... The desert safari provides about 20 minutes of exciting dune bashing along with electrifying camp journey where you can enjoy quad biking, camel ride and sand skiing.",
        locationPoint: {
          type: "Point",
          coordinates: [55.2705682, 25.202136],
        },
      },
    ],
    tourDescription:
      "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music.",
  },
];
export default TOUR_DATA;
