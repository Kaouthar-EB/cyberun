import React, { useState } from "react";
import "./App.css";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import MultiSelectWithContinents from "./Components/Assets/MultiSelectWithContinents";

const initialData = {
  nom: "",
  paysVisites: [],
};

const App = () => {
  const [formData, setFormData] = useState(initialData);

  // This function updates the formData state whenever there is a change in the "Pays visités" field
  const handleChange = (newValue) => {
    setFormData({ ...formData, paysVisites: newValue });
  };

  // This function logs the formData to the console when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Submitted Form Data:", formData);
    // Here you can add any action you want to perform with the form data, such as sending it to an API
  };

  return (
    <div className="App">
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Typography variant="body2" align="left" gutterBottom>
                Personal Info :
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    name="nom"
                    placeholder="Enter your name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.nom}
                    onChange={(e) =>
                      setFormData({ ...formData, nom: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <MultiSelectWithContinents
                    data={formData.paysVisites}
                    handleChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} align="right">
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default App;
