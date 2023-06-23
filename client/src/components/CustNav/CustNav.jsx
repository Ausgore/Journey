import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import styles from "./CustNav.module.scss";
import AnonOpts from './components/AnonOpts/AnonOpts';
import GenericLink from './components/GenericLink/GenericLink';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CustDrawer from './components/CustDrawer/CustDrawer';
import CustOpts from '../CustNav/components/CustOpts/CustOpts';
import DrawerListItem from './components/CustDrawer/components/DrawerListItem';

export default function CustNav({
  custLoginLink,
  adminLoginLink,
  registrationLink,
  }) {
  // for Ryan to set 
  // Note: (this var affects the drawer as well)
  // Extra Note: for CustOpts component provide profileSrc argurment with user profile image
  const isLoggedIn = false;
  const username = "Bob The Builder";

  return (
    <AppBar className={styles.navbar} elevation={0} position='static'>
      <Toolbar sx={{ display: {sm: "block" , md: "flex"} }} className={styles.toolbar}>
        <Typography variant="p" component={Link} to={"/"} className={styles.logo} sx={{fontSize: "3rem"}}>
          J<span>o</span>urney
        </Typography>

        {/* Desktop */}
        <Box sx={{ marginLeft: "auto", display: { xs: "none", md: "block"} }} className={styles.links}>
          <GenericLink linkName={"Routes"} linkPath={"/user/viewroutes"}/>
          <GenericLink linkName={"About"} linkPath={"/user/about"}/>
          <GenericLink linkName={"Forums"} linkPath={"/user/forums"}/>
          <GenericLink linkName={"FAQ"} linkPath={"/user/faq"}/>
        </Box>
        <Box sx={{ marginLeft: "auto", display: { xs: "none", md: "block"} }}>
          {isLoggedIn ? <CustOpts username={username}/> : <AnonOpts
            custLink={custLoginLink}
            adminLink={adminLoginLink}
            registrationLink={registrationLink} />
          }
        </Box>
        
        {/* Mobile / Tablet */}
        <Box sx={{ display: { xs: "block", md: "none"}, marginLeft: "auto"}}>
            <CustDrawer 
            children={[
              <DrawerListItem listItemText={"Routes"} link={"/user/viewroutes"} />,
              <DrawerListItem listItemText={"About"} link={"/user/about"} />,
              <DrawerListItem listItemText={"Forums"} link={"/user/forums"} />,
              <DrawerListItem listItemText={"FAQ"} link={"/user/faq"} />,
            ]}
            custLink={custLoginLink}
            adminLink={adminLoginLink}
            registrationLink={registrationLink}
            isLoggedIn={isLoggedIn}
            username={username}/>
        </Box>
      </Toolbar>
    </AppBar>
  )
}