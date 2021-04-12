import React, { useState, useEffect, useContext } from 'react';
import { Circle, Popup, MapContainer, TileLayer } from 'react-leaflet';
import { makeStyles } from '@material-ui/core';
import 'leaflet/dist/leaflet.css';

import './map.css';
import { Context } from "./Provider";

import { casesTypeColors } from '../../utils/map';

const cartoLink = 'https://wiki.openstreetmap.org/wiki/Carto_(Company)';
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

export default ({ data, casesType, zoom, center }) => {
  const { setMap } = useContext(Context);

  const classes = useStyles();
  const color = casesTypeColors[casesType].hex;

  return (
    <div className={classes.map}>
      <MapContainer
        whenCreated={ mapInstance => { setMap(mapInstance); } }
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
            // color={color} // doesn't work if the color changes
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
