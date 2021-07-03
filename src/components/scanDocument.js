import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Webcam from "react-webcam";
import Button from '@material-ui/core/Button';

// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(18),
      },
}));

export default function ScanID() {
// //     const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

// //   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    const [imgSrc, setImgSrc] = React.useState(null);
    const webcamRef = React.useRef(null);
  
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
      },
      [webcamRef,setImgSrc]
    );
    const retake = React.useCallback(
        () => {
          setImgSrc(null);
        },
        [setImgSrc]
      );
    const classes = useStyles();
//   const [id, setid] = React.useState('');

//   const handleChange = (event) => {
//     setid(event.target.value);
//   };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Scan and Upload your ID
      </Typography>
      {imgSrc && <><img src={imgSrc}/><Button
        variant="contained"
        color="secondary"
        onClick={retake}
        className={classes.button}
        >
         Retake?
      </Button></> }
      {!imgSrc &&
      <>
          <Webcam
        audio={false}
        height={210}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={420}
        videoConstraints={videoConstraints}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={capture}
        className={classes.button}
        >
         Take Photo
      </Button>
      </>
    }
        {/* <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
    </React.Fragment>
  );
}