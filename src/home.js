import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Router from 'react-router';
// import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import ContactsIcon from '@material-ui/icons/Contacts';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import QRCode from "qrcode.react";
// var Link = Router.Link;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/sam-mittal">
        Sam Mittal E-KYC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    qr:{
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ContactsIcon />
        </Avatar>
        <Typography component="h1" variant="h5" align="center">
          Scan the qr code to start KYC from your mobile (for better camera)
        </Typography>
        <div className={classes.qr}>
        <QRCode value={window.location.href + "kyc"} />
        </div>
        <Typography component="h1" variant="h5" align="center">
          OR
        </Typography>
          <Link to="/kyc">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Continue on same device
          </Button>
          </Link>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
