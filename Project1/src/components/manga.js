import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Paper,
  TextField,
  Select,
  Button,
  MenuItem,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Link,Avatar,
} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import MangaLogo from "./Manga1.png";
import AvatarImage from"./gamer.png";
import "@fontsource/open-sans/300.css";
import "@fontsource/dancing-script/700.css";

const blurStyle = {
  backdropFilter: "blur(10px)",
};

const NavBar = () => {
  
  return (
    <Toolbar style={{ backgroundColor: "black" }}>
      
      <img src={MangaLogo} alt="Manga Flights Logo" style={{ marginRight: "10px", width: "60px", height: "60px" }} />
      <Typography variant="h6" fontFamily="Dancing Script, cursive" sx={{ marginRight: "auto", color: "white" }}>
        MANGA FLIGHTS
      </Typography>
      <a href="/signup" style={{ textDecoration: "none", color: "white" }}>
        <Button color="inherit">Sign Up</Button>
      </a>
      <a href="/signin" style={{ textDecoration: "none", color: "white" }}>
        <Button color="inherit" component={Link} to="/signin">
          Sign In
        </Button>
      </a>
      <Avatar src={AvatarImage} alt="Avatar" style={{ marginRight: "10px", width: "40px", height: "40px" }} />
    </Toolbar>
  );
};

function Manga() {
  const [seatType, setSeatType] = React.useState("");
  const [passengerType, setPassengerType] = React.useState(""); 

  const cardData = [
    { title: "SAUDI ARABIA", content: "Flights to Dubai,Explore the vibrant city of Dubai with our special flights.", imageUrl: "https://c.ekstatic.net/shared/images/destination/v1/airports/DXB/810x270.jpg" },
    { title: "UNITED STATES", content: "Flights to New York,  Experience the hustle and bustle of the Big Apple with our direct flights.", imageUrl: "https://c.ekstatic.net/shared/images/destination/v1/airports/JFK/810x270.jpg" },
    { title: "UNITED ARAB EMIRATES", content: "Flights to Burj Khalifa, Visit the iconic Burj Khalifa in the heart of the UAE with our convenient flights.", imageUrl: "https://c.ekstatic.net/shared/images/destination/v1/airports/ORD/810x270.jpg" },
    { title: "UNITED STATES", content: "Flights to Los Angeles, Discover the glamour of Hollywood and sunny beaches in Los Angeles.", imageUrl: "https://c.ekstatic.net/shared/images/destination/v1/airports/LAX/810x270.jpg" },
    { title: "INDIA", content: "Flights to Ahmedabad, Experience the rich culture and heritage of Ahmedabad, India.", imageUrl: "https://c.ekstatic.net/shared/images/destination/v1/airports/AMD/810x270.jpg" },
    { title: "GREECE", content: "Flights to Athens, Explore the ancient wonders of Athens, Greece, with our exclusive flights.", imageUrl: "https://c.ekstatic.net/shared/images/destination/v1/airports/ATH/810x270.jpg" },
    { title: "THAILAND", content: "Flights to Bangkok, Immerse yourself in the vibrant culture and bustling streets of Bangkok.", imageUrl: "https://c.ekstatic.net/shared/images/destination/v1/airports/BKK/810x270.jpg" },
    { title: "SPAIN", content: "Flights to Barcelona, Enjoy the architectural marvels and vibrant nightlife of Barcelona, Spain.", imageUrl: "https://c.ekstatic.net/shared/images/destination/v1/airports/BCN/810x270.jpg" },
    { title: "NETHERLANDS", content: "Flights to Amsterdam, Experience the charm of Amsterdam with its picturesque canals and historic landmarks.", imageUrl: "https://c.ekstatic.net/shared/images/destination/v1/airports/AMS/810x270.jpg" },
  ];

  return (
    <div>
      <CssBaseline />
      
      <NavBar />

      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Paper elevation={3} sx={{ padding: 3, backgroundColor: "transparent", ...blurStyle }}>
          <form>
            <TextField label="Departure City" id="departure" name="departure" fullWidth required margin="normal" />
            <TextField label="Destination City" id="destination" name="destination" fullWidth required margin="normal" />
            <TextField
              label="Departure Date"
              id="date"
              name="date"
              type="date"
              fullWidth
              required
              margin="normal"
              InputLabelProps={{ shrink: true }}
            /><br></br>
            <Select label="Number of Passengers" id="passengers" name="passengers" fullWidth required margin="normal">
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
            </Select>
            <br></br>
            <Select
              label="Type of Seat"
              id="seatType"
              name="seatType"
              fullWidth
              required
              margin="normal"
              value={seatType}
              onChange={(e) => setSeatType(e.target.value)}
            >
              <MenuItem value="economy">Economy</MenuItem>
              <MenuItem value="business">Business</MenuItem>
            </Select>
            <br></br>
            <Select
              label="Passenger Type"
              id="passengerType"
              name="passengerType"
              fullWidth
              required
              margin="normal"
              value={passengerType}
              onChange={(e) => setPassengerType(e.target.value)}
            >
              <MenuItem value="infant">Infant</MenuItem>
              <MenuItem value="child">Child</MenuItem>
              <MenuItem value="adult">Adult</MenuItem>
            </Select>
            <br></br>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Search Flights
            </Button>
          </form>
        </Paper>
        <hr></hr>
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          {cardData.map((data, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card elevation={3}>
                <CardHeader title={data.title} />
                <img src={data.imageUrl} alt={data.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" fontFamily="Dancing Script, cursive">
                    {data.content}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontFamily="Roboto, sans-serif">
                    {data.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <div style={{ backgroundColor: "lightgray", padding: "20px", textAlign: "center" }}>
        <Typography variant="body2" fontFamily="Open Sans, sans-serif">
          Welcome to Manga Flights! Explore a world of travel with our exclusive flight options.
        </Typography>
        <Typography variant="body2" fontFamily="Open Sans, sans-serif">
          Plan your journey with us and experience seamless booking, comfortable seats, and exciting destinations.
        </Typography>
      </div>

      <footer style={{ backgroundColor: "black", color: "white", padding: "20px", textAlign: "center" }}>
        <Typography variant="body2" fontFamily="Open Sans, sans-serif">
          © {new Date().getFullYear()} Manga Flights. All rights reserved.
        </Typography>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <IconButton color="inherit" component="a" href="https://www.instagram.com/">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://www.google.com/">
            <GoogleIcon />
          </IconButton>
          <IconButton color="inherit" component="a" href="https://twitter.com/">
            <TwitterIcon />
          </IconButton>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button color="inherit" href="/about-us">About Us</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <Button color="inherit" href="/terms">Terms of Service</Button>
          <Button color="inherit" href="/privacy">Privacy Policy</Button>
        </div>
      </footer>
    </div>
  );
}

export default Manga;
