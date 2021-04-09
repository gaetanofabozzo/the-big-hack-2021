const axios = require("axios");
const fs = require("fs");

axios
  .get(
    "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/anagrafica-vaccini-summary-latest.json"
  )
  .then(({ data }) => {
    fs.writeFile(
      "./dataset/anagrafica-vaccini-summary-latest.json",
      JSON.stringify(data),
      function (err) {
        if (err) return console.log(err);
      }
    );
  });

const urls = [
  {
    url:
      "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/consegne-vaccini-latest.json",
    name: "consegne-vaccini-latest.json",
  },
  {
    url:
      "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/punti-somministrazione-latest.json",
    name: "punti-somministrazione-latest.json",
  },
  {
    url:
      "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/punti-somministrazione-tipologia.json",
    name: "punti-somministrazione-tipologia.json",
  },
  {
    url:
      "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/somministrazioni-vaccini-latest.json",
    name: "somministrazioni-vaccini-latest.json",
  },
  {
    url:
      "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/somministrazioni-vaccini-summary-latest.json",
    name: "somministrazioni-vaccini-summary-latest.json",
  },
  {
    url:
      "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json",
    name: "vaccini-summary-latest.json",
  },
];

for (let i = 0; i < urls.length; i++) {
  axios.get(urls[i].url).then(({ data }) => {
    data.data = data.data.filter(({ nome_area }) => {
      return nome_area == "Campania";
    });

    fs.writeFile(
      `./dataset/${urls[i].name}`,
      JSON.stringify(data),
      function (err) {
        if (err) return console.log(err);
      }
    );
  });
}
