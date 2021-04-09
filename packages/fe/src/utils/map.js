import { Circle, Popup } from "react-leaflet";
import React from "react";
import numeral from "numeral";
import { colors } from "../theme/palette";

const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    multiplier: 800,
  },
  recovered: {
    hex: '#7dd71d',
    multiplier: 1200,
  },
  deaths: {
    hex: '#fb4443',
    multiplier: 20,
  },
  numberOfVaccines: {
    hex: colors.primary,
    multiplier: 200,
  },
};

export const showDataOnMap = (data, casesType = 'numberOfVaccines') => (
  data.map((city) => (
    <Circle 
      center={[city.lat, city.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(city[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div>{city.place}</div>
          <div>{city[casesType]}</div>
        </div>
      </Popup>
    </Circle>
  ))
);


