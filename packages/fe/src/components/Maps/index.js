import React from "react";
import numeral from "numeral";
import { makeStyles } from "@material-ui/core";
import "leaflet/dist/leaflet.css";

import { Circle, Popup, MapContainer, TileLayer } from "react-leaflet";

import { casesTypeColors } from "../../utils/map";
import "./map.css";
import { useState } from "react";
import { useEffect } from "react";

const cartoLink = "https://wiki.openstreetmap.org/wiki/Carto_(Company)";
const osmLink = "https://www.openstreetmap.org/copyright";
const attribution = `&copy; <a href="${cartoLink}">Carto</a> &middot; <a href="${osmLink}">OpenStreetMap</a>`;
const url =
  "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";

const useStyles = makeStyles({
  map: {
    minHeight: "400px",
    position: "relative",
  },
  mapContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
  },
});

function Map({ data, casesType, center, zoom }) {
  const classes = useStyles();
  const color = casesTypeColors[casesType].hex;

  return (
    <div className={classes.map}>
      <MapContainer
        center={center}
        zoom={zoom}
        className={classes.mapContainer}
        zoomControl
      >
        <TileLayer attribution={attribution} url={url} />
        {data.map((city) => (
          <Circle
            key={city.name}
            center={[city.latitude, city.longitude]}
            fillOpacity={0.4}
            // color={color} // doesn't work if the color changes why????
            // fillColor={color}
            pathOptions={{ color, fillColor: color }}
            radius={
              Math.sqrt(city[casesType]) * casesTypeColors[casesType].multiplier
            }
          >
            <Popup>
              <div className="info-container">
                <div>
                  {city.name}, {city.province}
                </div>
                <div>N: {city[casesType]}</div>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
