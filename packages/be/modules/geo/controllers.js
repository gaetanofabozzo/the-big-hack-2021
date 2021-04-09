module.exports.get = async (req, res) => {
  const { place } = req.query;

  // eslint-disable-next-line global-require
  const places = require("../../dataset/campania-municipalities.json");

  // eslint-disable-next-line no-shadow
  const found = places.find((currPlace) => currPlace.name === place);

  if (!found) return res.status(404).send("Not found");

  return res.send(found);
};

module.exports.list = async (req, res) => {
  // eslint-disable-next-line global-require
  const places = require("../../dataset/campania-municipalities.json");
  return res.send(places);
};

module.exports.autocomplete = async (req, res) => {
  const { chars } = req.query;

  // eslint-disable-next-line global-require
  const places = require("../../dataset/campania-municipalities.json");

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
