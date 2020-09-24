import React from 'react';
import { Box, Typography, makeStyles, Link } from '@material-ui/core';
import about from '../img/unsplash/contact.jpg';

import {
  HomeRounded,
  PhoneRounded,
  EmailRounded,
  WatchLaterRounded,
  Facebook,
  Instagram,
} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)),url(${about})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: '40vh',
    '& svg': {
      color: 'white',
    },
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    '& h6': {
      marginLeft: '15px',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{
            color: 'white',
            height: '100%',
            padding: ' 0 20px',
            fontFamily: 'roboto, serif',
          }}
        >
          <Typography variant="h2">Contact Us </Typography>
          <Typography variant="subtitle1">
            Get in touch with us or follow us on Social Media
          </Typography>
          <Box display="flex">
            <Link href="https://www.facebook.com/mathersicecreams">
              <Facebook fontSize="large" />
            </Link>
            <Link href="https://www.instagram.com/mathersices/">
              <Instagram fontSize="large" />
            </Link>
          </Box>
        </Box>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignSelf="center"
          style={{ paddingTop: '30px' }}
        >
          <div className={classes.info}>
            <HomeRounded fontSize="large" color="primary" />
            <Typography variant="h6">Grant Park, Forres, IV36 3BN</Typography>
          </div>
          <div className={classes.info}>
            <EmailRounded fontSize="large" color="primary" />
            <Typography variant="h6">sales@mathersices.com</Typography>
          </div>
          <div className={classes.info}>
            <PhoneRounded fontSize="large" color="primary" />
            <Typography variant="h6">07957 619415</Typography>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2137.110183409657!2d-3.6068062839329307!3d57.61260865449537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4885772ddad30c9f%3A0xbde3ddee518dbe19!2sMathers%20Ice%20cream!5e0!3m2!1sen!2suk!4v1600896943357!5m2!1sen!2suk"
            width="400"
            height="300"
            style={{ border: 0 }}
          ></iframe>
        </Box>
      </div>
    </>
  );
};

export default Contact;
