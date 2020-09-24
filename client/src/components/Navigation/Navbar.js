import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';

import { withRouter } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import CartPreview from '../cart/CartPreview';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    '& h1': {
      fontFamily: 'Galada, cursive',
      fontSize: '3.3rem',
      lineHeight: '0em',
      color: '#007ea7',
      paddingTop: '10px',
      cursor: 'pointer',
    },
    '& Button': {
      fontSize: '1rem',
    },
  },
}));

const links = [
  {
    title: 'Home',
    pageURL: '/',
  },
  {
    title: 'Shop',
    pageURL: '/shop',
  },
  {
    title: 'About',
    pageURL: '/about',
  },
  {
    title: 'Contact',
    pageURL: '/contact',
  },
];

const Navbar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <AppBar className={classes.root} position="static" color="default">
      <Toolbar style={{ borderBottom: '2px solid #007ea7' }}>
        <div style={{ flexGrow: 1 }}>
          <h1 onClick={() => handleClick('/')}>Mather's</h1>
        </div>
        <CartPreview />

        {isMobile ? (
          <MobileMenu handleClick={handleClick} links={links} />
        ) : (
          <DesktopMenu links={links} handleClick={handleClick} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
