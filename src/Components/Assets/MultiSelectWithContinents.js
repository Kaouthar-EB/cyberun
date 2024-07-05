import React from "react";
import {
  TextField,
  Autocomplete,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
} from "@mui/material";

const continents = {
  Europe: ["Belgique", "France", "Allemagne", "Italie"],
  Afrique: ["Nigeria", "Kenya", "Afrique du Sud", "Egypte"],
  Amérique: ["Canada", "États-Unis", "Mexique"],
  // Add more continents and countries as needed
};

const countries = Object.values(continents).flat();

export default function MultiSelectWithContinents({ data, handleChange }) {
  // This function updates the selected countries based on the continent checkbox state
  const handleContinentChange = (continent, checked) => {
    let newSelectedCountries = [...data];
    if (checked) {
      // Add all countries of the continent
      newSelectedCountries = Array.from(
        new Set([...newSelectedCountries, ...continents[continent]])
      );
    } else {
      // Remove all countries of the continent
      newSelectedCountries = newSelectedCountries.filter(
        (country) => !continents[continent].includes(country)
      );
    }
    handleChange(newSelectedCountries);
  };

  return (
    <div>
      <Typography variant="body2" align="left" gutterBottom>
        Select countries by continent:
      </Typography>
      <FormGroup>
        {Object.keys(continents).map((continent) => (
          <FormControlLabel
            key={continent}
            control={
              <Checkbox
                checked={continents[continent].every((country) =>
                  data.includes(country)
                )}
                indeterminate={
                  continents[continent].some((country) =>
                    data.includes(country)
                  ) &&
                  !continents[continent].every((country) =>
                    data.includes(country)
                  )
                }
                onChange={(event) =>
                  handleContinentChange(continent, event.target.checked)
                }
              />
            }
            label={continent}
          />
        ))}
      </FormGroup>
      <Autocomplete
        sx={{ m: 1, width: 500 }}
        multiple
        options={countries}
        getOptionLabel={(option) => option}
        disableCloseOnSelect
        value={data}
        onChange={(event, newValue) => handleChange(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Pays visités"
            placeholder="Sélectionner les pays"
          />
        )}
      />
    </div>
  );
}
