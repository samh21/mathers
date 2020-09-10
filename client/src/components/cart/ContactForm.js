import React, { useState, useContext } from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { CartContext } from '../../CartContext';
import TextInput from './TextInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '100%',
      marginBottom: theme.spacing(1),
    },
  },
  buttons: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
    '& .MuiGrid-item': {
      marginBottom: theme.spacing(2),
    },
  },
}));

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  let history = useHistory();
  const { info } = useContext(CartContext);
  const [contact, setContact] = info;
  const classes = useStyles();
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

  const handleSubmit = () => {
    if (validateForm()) {
      history.push('/checkout');
    }
  };

  const validateForm = () => {
    let validate = {};
    validate.name = name ? '' : 'Name is required';
    validate.surname = surname ? '' : 'Name is required';
    validate.email = /$^|.+@.+..+/.test(email) ? '' : 'Email not valid';
    validate.email = email ? '' : 'Email required';
    validate.phone = phone ? '' : 'Phone number required';
    validate.phone = /^[0-9]+$/.test(phone) ? '' : 'Phone not valid';
    validate.address1 = address1 ? '' : 'Address 1 required';
    validate.town = town ? '' : ' Town required';
    validate.postcode = postcode ? '' : ' Postcode required';
    console.log(validate);
    setErrors({ ...validate });

    return Object.values(validate).every((x) => x === '');
  };

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className={classes.root}>
      <Grid container item xs={12} justify="center">
        <Grid container item xs={12}>
          <TextInput
            name="name"
            label="First Name"
            value={name}
            onChange={handleChange}
            error={errors.name}
          />
          <TextInput
            name="surname"
            label="Last Name"
            value={surname}
            onChange={handleChange}
            error={errors.surname}
          />
          <TextInput
            name="email"
            label="Email Address"
            value={email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextInput
            name="phone"
            label="Phone Number"
            value={phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <TextInput
            name="address1"
            label="Address Line 1"
            value={address1}
            onChange={handleChange}
            error={errors.address1}
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
            error={errors.town}
          />
          <TextInput
            name="postcode"
            label="Postcode"
            value={postcode}
            onChange={handleChange}
            error={errors.postcode}
          />
          <Grid
            className={classes.buttons}
            container
            item
            xs={12}
            justify="space-between"
          >
            <Grid item xs={12} sm={4}>
              <Link component={RouterLink} to="/shop">
                Continue Shopping
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                size="small"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Review Order
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
