import { createTheme } from "@mui/material/styles";

export const searchTheme = createTheme({
 overrides: {
  MuiInputLabel: {
   outlined: {
    transform: "translate(14px, 12.5px) scale(1)",
   },
  },
  MuiOutlinedInput: {
   root: {
    "& $notchedOutline": {
     borderColor: "green",
    },
    "&:hover $notchedOutline": {
     borderColor: "red",
    },
    "&$focused $notchedOutline": {
     borderColor: "purple",
    },
    "&&& $input": {
     padding: "1px",
    },
   },
  },
 },
});
