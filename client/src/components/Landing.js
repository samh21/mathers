import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  Container,
  Grid,
  createMuiTheme,
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import icecream from '../img/unsplash/icecream.jpg';
import burger from '../img/unsplash/burger.jpg';
import coffee from '../img/unsplash/coffee.jpg';
import '../components/landing.css';
import GridItem from './GridItem';

export default function Landing() {
  const theme = createMuiTheme({
    spacing: 2,
  });
  return (
    // <header className="landing">
    //   <div className="dark">
    //     <h1>Mather's Ice Cream</h1>
    //     <h2>
    //       Homemade ice cream.... currently home delivery only. Free home
    //       delivery in the Forres area every Friday.
    //     </h2>
    //     <Link to="/shop" style={{ textDecoration: 'none' }}>
    //       <p className="button" href="">
    //         Enter Shop
    //       </p>
    //     </Link>
    //   </div>
    // </header>
    <>
      <ThemeProvider theme={theme}>
        <Grid container spacing={1}>
          <GridItem
            xs={12}
            image={icecream}
            title="Ice Cream"
            description="Home made with locally sourced ingredients. Dairy free and Vegan friendly options avaialble"
            action={true}
          />
          <GridItem
            xs={12}
            md={6}
            image={coffee}
            title="Coffee"
            description="Artisan coffees. Responsibly sourced beans. Roasted locally"
          />
          <GridItem
            xs={12}
            md={6}
            image={burger}
            title="Burgers"
            description="Made with 21 day aged local Beef. Vegetarian options available"
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}
