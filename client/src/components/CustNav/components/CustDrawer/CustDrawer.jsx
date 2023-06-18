import React, { useState } from 'react';
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import DrawerListItem from './components/DrawerListItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CloseIcon from '@mui/icons-material/Close';

export default function CustDrawer({
    routeLink,
    aboutLink,
    forumLink,
    faqLink,
    custLink,
    adminLink,
    registrationLink,
    isLoggedIn
}) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    const [openSignIn, setOpenSignIn] = useState(false);
    const handleNestedList = () => setOpenSignIn(!openSignIn);

    {/* For Ryan To Set */}
    const nameOFLoggedInUser = "John Doe";
  
    return (
        <>
            <IconButton onClick={openMenu}>
                <MenuIcon />
            </IconButton>
            <Drawer
                variant="temporary"
                anchor="top"
                open={isMenuOpen}
                onClose={closeMenu}>
                <List>
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton onClick={closeMenu}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <DrawerListItem listItemText={"Routes"} link={routeLink} />
                    <DrawerListItem listItemText={"About"} link={aboutLink} />
                    <DrawerListItem listItemText={"Forums"} link={forumLink} />
                    <DrawerListItem listItemText={"FAQ"} link={faqLink} />

                    {/* // For Ryan To Set */}
                    {isLoggedIn === false ?
                        <>
                            <ListItemButton onClick={handleNestedList}>
                                <ListItemText primary="Sign In" />
                                {openSignIn ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                            </ListItemButton>
                            <Collapse in={openSignIn}>
                                <List>
                                    <DrawerListItem listItemText={"Login as User"} link={custLink} />
                                    <DrawerListItem listItemText={"Login as Admin"} link={adminLink} />
                                </List>
                            </Collapse>
                            <DrawerListItem listItemText={"Sign Up"} link={registrationLink} />
                        </> :
                        <DrawerListItem listItemText={`Logged In As: ${nameOFLoggedInUser}`} link={"#"} />}
                </List>
            </Drawer>
        </>
    );
}
