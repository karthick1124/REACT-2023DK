import React, { useState } from "react";
import axios from "axios";
import {
  makeStyles,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  registrationContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  registrationPaper: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent", // Set background color to transparent
    borderRadius: "10px",
    boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.2)",
    width: "300px",
    fontFamily: "'Dancing Script', cursive",
    backdropFilter: "blur(10px)", // Adjust the blur value as needed
  },
  logo: {
    width: "100px", // Adjust the width of the logo as needed
    marginBottom: theme.spacing(2),
  },
  inputField: {
    margin: theme.spacing(1, 0),
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: Add a semi-transparent white background to input fields
  },
  registrationButton: {
    margin: theme.spacing(2, 0),
  },
  formControl: {
    margin: theme.spacing(1, 0),
    minWidth: "100%",
  },
}));

function Register() {
  const classes = useStyles();
const [name,setName]=useState(null);
const [password,setPassword]=useState(null);
const [email,setEmail]=useState(null);
const handleClick=()=>{
  const post=async()=>{
    await axios.post("http://localhost:3001/users",{Name:name,Password:password,Email:email});
  }
  try{
    post();
  }
  catch(err)
  {
    console.log(err);
  }
}
  return (
    <Container component="main" className={classes.registrationContainer}>
      <Paper elevation={3} className={classes.registrationPaper}>
        <Typography variant="h5">Manga Flights Registration</Typography>
        <TextField
          className={classes.inputField}
          variant="outlined"
          label="Full Name"
          fullWidth
          required
          onChange={(event)=>setName(event.target.value)}
        />
        <TextField
          className={classes.inputField}
          variant="outlined"
          type="email"
          label="Email"
          fullWidth
          required
          onChange={(event)=>setEmail(event.target.value)}
        />
        <TextField
          className={classes.inputField}
          variant="outlined"
          type="password"
          label="Password"
          fullWidth
          required
          onChange={(event)=>setPassword(event.target.value)}
        />
        <TextField
          className={classes.inputField}
          variant="outlined"
          type="password"
          label="Confirm Password"
          fullWidth
          required
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select labelId="gender-label" label="Gender" fullWidth>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classes.inputField}
          variant="outlined"
          type="number"
          label="Age"
          fullWidth
          required
        />
        <Button
          className={classes.registrationButton}
          variant="contained"
          color="primary"
          fullWidth
          href='/manga'
          onClick={handleClick}
        >
          Register
        </Button>
      </Paper>
    </Container>
  );
}

export default Register;
