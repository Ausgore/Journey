import React from 'react';
import Category from './components/Category/Category';
import CategoryItem from './components/CategoryItem/CategoryItem';
import FooterBottom from './components/FooterBottom/FooterBottom';
import styles from "./CustFooter.module.scss";
import StatelessMailField from './components/StatelessMailField/StatelessMailField';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from "@mui/material/Box";

export default function CustFooter () {
  return (
    <div className={styles.footer}>
      <Category categoryName={"Contact"}>
        <CategoryItem itemName={"JourneyAssist@gmail.com"} isLink={false}/>
        <CategoryItem itemName={"+65 9984 0093 (HQ)"} isLink={false}/>
        <CategoryItem itemName={"+65 9954 0493 (Admin)"} isLink={false}/>
      </Category>
      <Category categoryName={"Address"}>
        <CategoryItem 
        itemName={"Singapore  637561, 33 Tuas View Walk 2 Street"} 
        isLink={false}/>
      </Category>
      <Category categoryName={"Links"}>
        <CategoryItem itemName={"Home"} path={"/"} isLink={true}/>
        <CategoryItem itemName={"About"} path={"/user/about"} isLink={true}/>
        <CategoryItem itemName={"Routes"} path={"/user/viewroutes"} isLink={true}/>
        <CategoryItem itemName={"Forums"} path={"/user/forums"} isLink={true}/>
        <CategoryItem itemName={"FAQ"} path={"/user/faq"} isLink={true}/>
      </Category>
      <Category categoryName={"Get Updated"}>
        <CategoryItem 
        itemName={"Get up to speed with the latest routes and features"} 
        isLink={false}/>
        <StatelessMailField/>
        <CategoryItem itemName={"Follow Us"} isLink={false}/>
          <Box sx={{ display: "flex" }}>
              <CategoryItem 
              itemName={<TwitterIcon sx={{ marginRight: "2em", width: 45, height: 45}} 
              className={styles.icon}/>} isLink={false}/>
              <CategoryItem 
              itemName={<InstagramIcon sx={{ marginRight: "2em", width: 45, height: 45}} 
              className={styles.icon}/>} isLink={false}/>
              <CategoryItem 
              itemName={<FacebookIcon sx={{ marginRight: "2em", width: 45, height: 45}} 
              className={styles.icon}/>} isLink={false}/>
          </Box>
      </Category>
      <FooterBottom/>
    </div>
  );
}
