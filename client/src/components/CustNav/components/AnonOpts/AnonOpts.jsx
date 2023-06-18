import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styles from "./AnonOpts.module.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AnonOpts({ adminLink, custLink, registrationLink }) {
    const [dropDown, setDropDown] = useState(null);
    const isClicked = Boolean(dropDown);
    // targets the btn element
    const handleClick = (event) => setDropDown(event.currentTarget);
    const onClose = () => setDropDown(null);

    return (
        <Stack direction="row" sx={{ marginLeft: "auto", marginRight: "2em" }}>
            <Button
                className={styles.signIn}
                endIcon={<ArrowDropDownIcon />}
                id="login-menu-btn"
                onClick={handleClick}
                aria-controls={isClicked ? "login-menu" : null}
                aria-expanded={isClicked ? "true" : null}>
                Sign In
            </Button>
            <Menu
                id="login-menu"
                anchorEl={dropDown}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                // will only open if isClicked is truthy
                open={isClicked}
                onClose={onClose}
                MenuListProps={{
                    "aria-labelledby:": "login-menu-btn"
                }}>
                <MenuItem onClick={onClose} className={styles.menu}>
                    <Typography variant="p" component={Link} to={custLink} className={styles.menuItem}>
                        Login as User
                    </Typography>
                </MenuItem>
                <MenuItem onClick={onClose} className={styles.menu}>
                    <Typography variant="p" component={Link} to={adminLink} className={styles.menuItem}>
                        Login as Admin
                    </Typography>
                </MenuItem>
            </Menu>
            <Button variant="p" component={Link} to={registrationLink} className={styles.signUp}>
                Sign Up
            </Button>
        </Stack>
    )
}
