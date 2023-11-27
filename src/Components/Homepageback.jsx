import React from "react";

import MenuAppBar from "./Navbar";
import "./Homepageback.css";
import MenuApBar from "./Navbar2";
import Category from "./Category";



import RecipeReviewCard from "./TopSells";
import { Stack } from "@mui/material";
import OurDealers from "./OurDealers";
import Footer2 from "./Footer2";



const Home = () => {
  return (
    <div>

      <MenuAppBar></MenuAppBar>
      <MenuApBar></MenuApBar>
      <div className="home">
      <Stack direction="row" spacing={5}>

        <div  style={{clear:"both"}}>
      <Category></Category>
      
      </div>
      <RecipeReviewCard></RecipeReviewCard>
      </Stack>
      <Stack direction="row">
        <OurDealers></OurDealers>
      </Stack>
      </div>
      
   
    <Footer2></Footer2>

    </div>
  );
};

export default Home;
