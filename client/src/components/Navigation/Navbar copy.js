import React from 'react';
import { AppBar, Box, Grid, Toolbar, Typography } from '@material-ui/core';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
      <Toolbar>
        <Grid container>
          <Grid item xs={5} sm={4} md={3} lg={2}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <div>
                <Typography variant="h6">Home</Typography>
              </div>
              <div>
                <Typography variant="h6">Shop</Typography>
              </div>
              <div>
                <Typography variant="h6">About</Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={6} lg={8}></Grid>
          <Grid item xs={5} sm={4} md={3} lg={2}>
            <Box display="flex" justifyContent="flex-end">
              <div>
                <Typography variant="h6">Extra info</Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
