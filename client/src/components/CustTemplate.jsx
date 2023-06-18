import React from 'react';
import CustNav from './CustNav/CustNav';
import Box from "@mui/material/Box";

export default function CustTemplate({ children }) {
  return (
    <Box>
      <CustNav
        routeLink={"/user/viewroutes"}
        aboutLink={"/user/about"}
        forumLink={"/user/forums"}
        faqLink={"/user/faq"}
        custLoginLink={""}
        // Temp
        adminLoginLink={"/admin/accounts"}
        registrationLink={""} />
        { children }
    </Box>
  );
}