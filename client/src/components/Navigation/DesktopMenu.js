import React from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  active: {
    borderBottom: '3px solid pink',
  },
  notActive: {
    fontSize: '1.3rem',
    marginRight: '8px',
    color: '#007ea7',
    fontFamily: 'roboto, serif',
  },
}));

const DesktopMenu = ({ links, handleClick }) => {
  const classes = useStyles();
  return (
    <>
      {links.map((link) => {
        const { title, pageURL } = link;
        return (
          <NavLink
            key={title}
            exact
            to={pageURL}
            className={classes.notActive}
            activeClassName={classes.active}
          >
            {title}
          </NavLink>
        );
      })}
    </>
  );
};

export default DesktopMenu;
