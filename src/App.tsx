import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import CallMadeSharpIcon from "@mui/icons-material/CallMadeSharp";

import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import NavBar from "./components/navBar";
import MainContainer from "./components/mainContents";

import img1 from "./im/img1.png";
import img2 from "./im/img2.png";
import QuoteSection from "./components/quote";
import Footer from "./components/footer";

function App() {
  return (
    <Box>
      <NavBar />

      <MainContainer />
      <QuoteSection />
      <Footer />
    </Box>
  );
}

export default App;
