import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import styles from "./GenericLink.module.scss";

export default function GenericLink({ linkName, linkPath }) {
    const location = useLocation();
    return (
        <Typography variant="p" component={Link} to={linkPath} className={location.pathname === linkPath? styles.active : styles.genericLinks}>
            {linkName}
        </Typography>
    );
}