import React from "react";
import {
  makeStyles,
  Button,
  TextField,
  Container,
  Typography,
  Paper,
  Grid,
  Link,
  IconButton,
} from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  loginPaper: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    fontFamily: "'Comic Sans MS', 'Arial', sans-serif",
  },
  inputField: {
    margin: theme.spacing(1, 0),
  },
  loginButton: {
    margin: theme.spacing(2, 0),
  },
  socialIcons: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.loginContainer}>
      <Paper elevation={3} className={classes.loginPaper}>
        <Typography variant="h5">Sign In</Typography>
        <TextField
          className={classes.inputField}
          variant="outlined"
          label="Username"
          fullWidth
          required
        />
        <TextField
          className={classes.inputField}
          variant="outlined"
          type="password"
          label="Password"
          fullWidth
          required
        />
        <Button
          className={classes.loginButton}
          variant="contained"
          color="primary"
          fullWidth
          href="/l"
        >
          Login
        </Button>
        <Grid container justify="space-between">
          <Grid item>
            <Link href="/signup" variant="body2">
              Sign Up
            </Link>
          </Grid>
          <Grid item>
            <Link href="/forgot-password" variant="body2">
              Forgot Password?
            </Link>
          </Grid>
        </Grid>
        <div className={classes.socialIcons}>
          <IconButton color="primary" href="https://www.instagram.com/">
            <InstagramIcon />
          </IconButton>
          <IconButton color="primary" href="https://www.google.com/">
            <GoogleIcon />
          </IconButton>
          <IconButton color="primary" href="https://twitter.com/">
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary" href="/">
            <HomeIcon />
          </IconButton>
        </div>
      </Paper>
    </Container>
  );
}

export default Login;
