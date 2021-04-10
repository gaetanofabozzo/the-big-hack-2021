import React from "react";
import ChatBot from "react-simple-chatbot";

const ageGroup = {
  "16-19": (
    <>
      Se non appertieni a categorie gia in fase di vaccinazione attendi il tuo
      turno maggiorni infromazioni sul sito&nbsp;
      <a href="https://adesionevaccinazioni.soresa.it/adesione/cittadino">
        clicca qui
      </a>
    </>
  ),
  "20-29": (
    <>
      Se non appertieni a categorie gia in fase di vaccinazione attendi il tuo
      turno maggiorni infromazioni sul sito&nbsp;
      <a href="https://adesionevaccinazioni.soresa.it/adesione/cittadino">
        clicca qui
      </a>
    </>
  ),
  "30-39": (
    <>
      Se non appertieni a categorie gia in fase di vaccinazione attendi il tuo
      turno maggiorni infromazioni sul sito&nbsp;
      <a href="https://adesionevaccinazioni.soresa.it/adesione/cittadino">
        clicca qui
      </a>
    </>
  ),
  "40-49": (
    <>
      Se non appertieni a categorie gia in fase di vaccinazione attendi il tuo
      turno maggiorni infromazioni sul sito&nbsp;
      <a href="https://adesionevaccinazioni.soresa.it/adesione/cittadino">
        clicca qui
      </a>
    </>
  ),
  "50-59": (
    <>
      Se non appertieni a categorie gia in fase di vaccinazione attendi il tuo
      turno maggiorni infromazioni sul sito&nbsp;
      <a href="https://adesionevaccinazioni.soresa.it/adesione/cittadino">
        clicca qui
      </a>
    </>
  ),
  "60-69": (
    <>
      Se non appertieni a categorie gia in fase di vaccinazione attendi il tuo
      turno maggiorni infromazioni sul sito&nbsp;
      <a href="https://adesionevaccinazioni.soresa.it/adesione/cittadino">
        clicca qui
      </a>
    </>
  ),
  "70-79": (
    <>
      Le vaccinazioni sono gia aperte per te! per maggiori informazioni consulta
      il sito&nbsp;
      <a href="https://adesionevaccinazioni.soresa.it/adesione/cittadino">
        clicca qui
      </a>
    </>
  ),
  "80-89": (
    <>
      Le vaccinazioni sono gia aperte per te! per maggiori informazioni consulta
      il sito&nbsp;
      <a href="https://adesionevaccinazioni.soresa.it/adesione/cittadino">
        clicca qui
      </a>
    </>
  ),
  "90+": (
    <>
      Le vaccinazioni sono gia aperte per te! per maggiori informazioni consulta
      il sito&nbsp;
      <a href="https://adesionevaccinazioni.soresa.it/adesione/cittadino">
        clicca qui
      </a>
    </>
  ),
};

// eslint-disable-next-line react/prop-types
export default function AnswerAge({ previousStep }) {
  // eslint-disable-next-line react/prop-types
  const { message } = previousStep;
  return <div className="age-group">{ageGroup[message]}</div>;
}
