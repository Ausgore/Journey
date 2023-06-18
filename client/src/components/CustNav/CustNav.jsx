import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import styles from "./CustNav.module.scss";
import AnonOpts from './components/AnonOpts/AnonOpts';
import GenericOpts from './components/GenericOpts/GenericOpts';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CustDrawer from './components/CustDrawer/CustDrawer';
import CustOpts from '../CustNav/components/CustOpts/CustOpts';

export default function CustNav({
  routeLink, 
  aboutLink, 
  forumLink, 
  faqLink,
  custLoginLink,
  adminLoginLink,
  registrationLink,
  }) {
  
  // for Ryan to set 
  // Note: (this var affects the drawer as well)
  const isLoggedIn = false;
  const username = "Bob The Builder";

  return (
    <AppBar className={styles.navbar} elevation={0} position='static'>
      <Toolbar sx={{ display: {sm: "block" , md: "flex"}, flexWrap: "wrap" }} className={styles.toolbar}>
        <Typography variant="p" component={Link} to={"/"} className={styles.logo} sx={{fontSize: "3rem"}}>
          J<span>o</span>urney
        </Typography>
        <Box sx={{ marginLeft: "auto", display: { xs: "none", md: "block"} }} className={styles.links}>
          <GenericOpts
            routeLink={routeLink}
            aboutLink={aboutLink}
            forumLink={forumLink}
            faqLink={faqLink} />
        </Box>
        <Box sx={{ marginLeft: "auto", display: { xs: "none", md: "block"} }}>
          {isLoggedIn ? <CustOpts username={username}/> : <AnonOpts
            custLink={custLoginLink}
            adminLink={adminLoginLink}
            registrationLink={registrationLink} />
          }
        </Box>
        <Box sx={{ display: { xs: "block", md: "none"}, marginLeft: "auto"}}>
            <CustDrawer 
            routeLink={routeLink}
            aboutLink={aboutLink}
            forumLink={forumLink}
            faqLink={faqLink}
            custLink={custLoginLink}
            adminLink={adminLoginLink}
            registrationLink={registrationLink}
            isLoggedIn={isLoggedIn}/>
        </Box>
      </Toolbar>
    </AppBar>
  )
}