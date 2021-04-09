import React from "react";
import { makeStyles } from "@material-ui/core"
import "leaflet/dist/leaflet.css";
import './map.css'
import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from '../../utils/map';

const cartoLink = "https://wiki.openstreetmap.org/wiki/Carto_(Company)";
const osmLink = "https://www.openstreetmap.org/copyright";
const attribution = `&copy; <a href="${cartoLink}">Carto</a> &middot; <a href="${osmLink}">OpenStreetMap</a>`;
const url = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";

const useStyles = makeStyles({
  map: {
    minHeight: '400px',
    position: 'relative',
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%'
  }
});

function Map({ cities, casesType, center, zoom }) {
  const classes = useStyles();
  return (
    <div className={classes.map}>
      <MapContainer center={center} zoom={zoom} className={classes.mapContainer} >
        <TileLayer
          attribution={attribution}
          url={url}
        />
        {showDataOnMap(cities, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;