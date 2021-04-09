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
