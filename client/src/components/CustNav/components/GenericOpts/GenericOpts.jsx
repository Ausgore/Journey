import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import styles from "./GenericOpts.module.scss";

export default function GenericOpts({ routeLink, aboutLink, forumLink, faqLink }) {
    const location = useLocation();

    return (<>
        <Typography variant="p" component={Link} to={routeLink} className={location.pathname === routeLink ? styles.active : styles.genericLinks}>
            Routes
        </Typography>
        <Typography variant="p" component={Link} to={aboutLink} className={location.pathname === aboutLink ? styles.active : styles.genericLinks}>
            About
        </Typography>
        <Typography variant="p" component={Link} to={forumLink} className={location.pathname === forumLink ? styles.active : styles.genericLinks}>
            Forums
        </Typography>
        <Typography variant="p" component={Link} to={faqLink} className={location.pathname === faqLink ? styles.active : styles.genericLinks}>
            FAQ
        </Typography>
    </>
    );
}