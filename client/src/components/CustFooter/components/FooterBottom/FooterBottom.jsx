import React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import nav from "../../../CustNav/CustNav.module.scss";


export default function FooterBottom ()  {
  return (
    <Box sx={{ 
        display: "flex",
        flexWrap: "wrap", 
        alignItems: "center",
        marginLeft: "4em", 
        marginRight: "4em",
        paddingBottom: "0.8em"}}
    >
        <Typography variant="p" component={Link} to={"/"} className={nav.logo} sx={{fontSize: "3rem", marginRight: "3.3em"}}>
          J<span>o</span>urney
        </Typography>
        <Typography  sx={{ marginRight: "1em"}}>
            @ 2023 All Rights Reserved
        </Typography>
        <Typography  sx={{ marginRight: "1em", textDecoration: "underline"}}>
            Privacy Policies
        </Typography>
        <Typography sx={{ textDecoration: "underline" }}>
            Terms & Conditions
        </Typography>
    </Box>
  );
}
