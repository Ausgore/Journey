import React from 'react';
import CustNav from './CustNav/CustNav';
import CustFooter from './CustFooter/CustFooter';
import Box from "@mui/material/Box";

export default function CustTemplate({ children }) {
  return (
    <Box>
      <CustNav
        custLoginLink={""}
        adminLoginLink={"/admin/accounts"}
        registrationLink={""} />
        { children }
      <CustFooter/>
    </Box>
  );
}