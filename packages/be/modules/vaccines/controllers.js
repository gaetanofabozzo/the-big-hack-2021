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

module.exports.municipalities = async (req, res) => {
  // eslint-disable-next-line global-require
  const places = require("../../dataset/campania-municipalities.json");
  return res.send(places);
};
