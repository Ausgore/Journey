import React from 'react'
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import styles from "./CustOpts.module.scss";

export default function CustOpts({ username, profileSrc }) {

  // Bob The Builder Profile
  const defaultProfile = "https://ichef.bbci.co.uk/images/ic/1200x675/p08rkqxl.jpg";

  return (
    <Box sx={{ display: "flex" }}>
      <Typography className={styles.username}>
        {username}
      </Typography>
      <Avatar src={profileSrc || defaultProfile} alt="userprofile" sx={{ width: 65, height: 65 }}/>
    </Box>
  );
}