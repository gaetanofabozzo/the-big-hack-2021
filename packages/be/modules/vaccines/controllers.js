// const generateRandomInt = (min, max) =>
//   parseInt(Math.random() * (max - min + 1) + min, 10);

module.exports.getDate = async (req, res) => {
  // eslint-disable-next-line global-require
  const {
    data,
    // eslint-disable-next-line global-require
  } = require("../../dataset/somministrazioni-vaccini-latest.json");

  const output = {};
  for (let i = 0; i < data.length; i++) {
    const date = data[i].data_somministrazione;

    if (!output[date]) {
      output[date] = {
        sesso_maschile: data[i].sesso_maschile,
        sesso_femminile: data[i].sesso_femminile,
        categoria_operatori_sanitari_sociosanitari:
          data[i].categoria_operatori_sanitari_sociosanitari,
        categoria_personale_non_sanitario:
          data[i].categoria_personale_non_sanitario,
        categoria_ospiti_rsa: data[i].categoria_ospiti_rsa,
        categoria_over80: data[i].categoria_over80,
        categoria_forze_armate: data[i].categoria_forze_armate,
        categoria_personale_scolastico: data[i].categoria_personale_scolastico,
        categoria_altro: data[i].categoria_altro,
        prima_dose: data[i].prima_dose,
        seconda_dose: data[i].seconda_dose,
      };
    } else {
      output[date] = {
        sesso_maschile: data[i].sesso_maschile + output[date].sesso_maschile,
        sesso_femminile: data[i].sesso_femminile + output[date].sesso_femminile,
        categoria_operatori_sanitari_sociosanitari:
          data[i].categoria_operatori_sanitari_sociosanitari +
          output[date].categoria_operatori_sanitari_sociosanitari,
        categoria_personale_non_sanitario:
          data[i].categoria_personale_non_sanitario +
          output[date].categoria_personale_non_sanitario,
        categoria_ospiti_rsa:
          data[i].categoria_ospiti_rsa + output[date].categoria_ospiti_rsa,
        categoria_over80:
          data[i].categoria_over80 + output[date].categoria_over80,
        categoria_forze_armate:
          data[i].categoria_forze_armate + output[date].categoria_forze_armate,
        categoria_personale_scolastico:
          data[i].categoria_personale_scolastico +
          output[date].categoria_personale_scolastico,
        categoria_altro: data[i].categoria_altro + output[date].categoria_altro,
        prima_dose: data[i].prima_dose + output[date].prima_dose,
        seconda_dose: data[i].seconda_dose + output[date].seconda_dose,
      };
    }
  }

  return res.send(output);
};

module.exports.getAgeGroup = async (req, res) => {
  // eslint-disable-next-line global-require
  const {
    data,
    // eslint-disable-next-line global-require
  } = require("../../dataset/somministrazioni-vaccini-latest.json");

  let output = {};
  for (let i = 0; i < data.length; i++) {
    const ageGroup = data[i].fascia_anagrafica;

    if (!output[ageGroup]) {
      output[ageGroup] = {
        name: ageGroup,
        total: data[i].sesso_femminile + data[i].sesso_maschile,
        prima_dose: data[i].prima_dose,
        seconda_dose: data[i].seconda_dose,
      };
    } else {
      output[ageGroup] = {
        name: ageGroup,
        total:
          data[i].sesso_femminile +
          data[i].sesso_maschile +
          output[ageGroup].total,
        prima_dose: data[i].prima_dose + output[ageGroup].prima_dose,
        seconda_dose: data[i].seconda_dose + output[ageGroup].seconda_dose,
      };
    }
  }
  output = Object.values(output);
  output.sort(function (a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return res.send(output);
};

module.exports.getCategories = async (req, res) => {
  // eslint-disable-next-line global-require
  const {
    data,
    // eslint-disable-next-line global-require
  } = require("../../dataset/somministrazioni-vaccini-latest.json");

  let output = [
    {
      subject: "Operatori Sanitari",
    },
    {
      subject: "Personale non sanitario",
    },
    {
      subject: "Ospiti RSA",
    },
    {
      subject: "Over 80",
    },
    {
      subject: "Forze Armate",
    },
    {
      subject: "Personale Scolastico",
    },
    {
      subject: "Altro",
    },
  ];

  output = output.map((elem) => {
    return { ...elem, pfizer: 0, moderna: 0, astra: 0 };
  });

  const types = [
    "categoria_operatori_sanitari_sociosanitari",
    "categoria_personale_non_sanitario",
    "categoria_ospiti_rsa",
    "categoria_over80",
    "categoria_forze_armate",
    "categoria_personale_scolastico",
    "categoria_altro",
  ];

  const supplier = new Map([
    ["Pfizer/BioNTech", "pfizer"],
    ["Moderna", "moderna"],
    ["AstraZeneca", "astra"],
  ]);

  for (let i = 0; i < data.length; i++) {
    const { fornitore } = data[i];
    for (let j = 0; j < types.length; j++) {
      output[j][supplier.get(fornitore)] += data[i][types[j]];
    }
  }

  return res.send(output);
};

module.exports.municipalities = async (req, res) => {
  // eslint-disable-next-line global-require
  const places = require("../../dataset/campania-municipalities.json");
  return res.send(places);
};

module.exports.positivesOnVaccines = async (req, res) => {
  // eslint-disable-next-line global-require
  const data = require("../../dataset/positivi_su_vaccini.json");
  return res.send(data);
};
