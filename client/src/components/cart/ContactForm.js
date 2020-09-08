import React, { useState, useContext } from 'react';
import {
  Grid,
  TextField,
  makeStyles,
  Paper,
  Box,
  Button,
  Chip,
} from '@material-ui/core';
import { CartContext } from '../../CartContext';
import TextInput from './TextInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '100%',
      marginBottom: theme.spacing(1),
    },
  },
  paper: {
    paddingTop: theme.spacing(1),
  },
}));

const ContactForm = () => {
  const { info } = useContext(CartContext);
  const [contact, setContact] = info;
  const {
    name,
    surname,
    email,
    phone,
    address1,
    address2,
    town,
    postcode,
  } = contact;

  const classes = useStyles();

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Paper>
      <Box display="flex" justify="center" margin="auto">
        <form className={classes.root}>
          <Grid container>
            <Grid item xs={1} sm={2}></Grid>
            <Grid container item xs={10} sm={8}>
              <TextInput
                name="name"
                label="First Name"
                value={name}
                onChange={handleChange}
              />
              <TextInput
                name="surname"
                label="Last Name"
                value={surname}
                onChange={handleChange}
              />
              <TextInput
                name="email"
                label="Email Address"
                value={email}
                onChange={handleChange}
              />
              <TextInput
                name="phone"
                label="Phone Number"
                value={phone}
                onChange={handleChange}
              />
              <TextInput
                name="address1"
                label="Address Line 1"
                value={address1}
                onChange={handleChange}
                sm={12}
              />
              <TextInput
                name="address2"
                label="Address Line 2"
                value={address2}
                onChange={handleChange}
                sm={12}
                required={false}
              />
              <TextInput
                name="town"
                label="City"
                value={town}
                onChange={handleChange}
              />
              <TextInput
                name="postcode"
                label="Postcode"
                value={town}
                onChange={handleChange}
              />
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Box className={classes.paper}>
                    <Button
                      size="small"
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Review Order
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={2}></Grid>
          </Grid>
        </form>
      </Box>
    </Paper>
  );
};

export default ContactForm;
