// import React from "react";
// import { TextField, Autocomplete } from "@mui/material";

// const countries = [
//   "Belgique",
//   "France",
//   "Allemagne",
//   "Italie",
//   "Nigeria",
//   "Kenya",
//   "Afrique du Sud",
//   "Egypte",
//   "Canada",
//   "États-Unis",
//   "Mexique",
//   // Add more countries as needed
// ];

// export default function MultiSelect({ data, handleChange }) {
//   return (
//     <Autocomplete
//       sx={{ m: 1, width: 500 }}
//       multiple
//       options={countries}
//       getOptionLabel={(option) => option}
//       disableCloseOnSelect
//       value={data}
//       onChange={(event, newValue) => handleChange(newValue)}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           variant="outlined"
//           label="Visited counties"
//           placeholder="Sélectionner les pays"
//         />
//       )}
//     />
//   );
// }
