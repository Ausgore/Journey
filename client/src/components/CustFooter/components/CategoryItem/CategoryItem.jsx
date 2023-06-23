import React from 'react';
import Typography from '@mui/material/Typography';
import styles from "./CategoryItem.module.scss";
import { Link } from 'react-router-dom';

export default function CategoryItem({itemName, path="", isLink}) {
  return (
    isLink ? 
    <Typography className={styles.itemLink} variant="p" component={Link} to={path}>
      {itemName}
    </Typography> :
    <Typography className={styles.item} variant="p">
      {itemName}
    </Typography>
  );
}