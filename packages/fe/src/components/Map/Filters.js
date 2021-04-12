import React, { useContext } from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from "@material-ui/core";
import { Context } from "./Provider";

export const MunicipalityFilter = ({ data }) => {
  const { map } = useContext(Context);

  return (
    <Autocomplete
      id="comune"
      onChange={(_e, value) => {
        map.setZoom(12);
        map.setView({
          lat: value.latitude,
          lng: value.longitude,
        });
      }}
      options={data}
      getOptionLabel={(option) => option?.name}
      style={{ width: 300, marginBottom: '10px' }}
      renderInput={(params) => (
        <TextField
            {...params}
            label="Cerca il tuo comune"
            variant="outlined"
        />
      )}
    />
  );
};
