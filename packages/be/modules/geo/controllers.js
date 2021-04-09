const Geocoder = require("node-geocoder");

const geoOptions = {
  provider: "openstreetmap",
};

const geoCoder = Geocoder(geoOptions);

module.exports.get = async (req, res) => {
  const { place } = req.query;
  const coords = await geoCoder.geocode({
    country: "Italia",
    state: "Campania",
    city: place,
  });

  if (!coords.length) return res.status(404).send("Not found");

  return res.send(coords[0]);
};

module.exports.autocomplete = async (req, res) => {
  const { chars } = req.query;

  // eslint-disable-next-line global-require
  const places = require("./campania-municipalities.json");

  const matches = [];

  if (chars) {
    places.forEach((place) => {
      if ((place.name || place).toLowerCase().includes(chars.toLowerCase())) {
        matches.push(place);
      }
    });
  }

  return res.send(matches);
};
