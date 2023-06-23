import React from 'react'
import ListItem from "@mui/material/ListItem";
import ListItemText from '@mui/material/ListItemText';
import styles from "./DrawerListItem.module.scss";
import {Link} from "react-router-dom";

export default function DrawerListItem ({listItemText, link}) {
  return (
    <ListItem 
      component={Link} 
      to={link}>
        <ListItemText primary={listItemText} className={styles.listItem}/>
    </ListItem>
  );
}