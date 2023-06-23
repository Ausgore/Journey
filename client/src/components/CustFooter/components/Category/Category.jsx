import React from 'react';
import Stack from "@mui/material/Stack";
import styles from "./Category.module.scss";
import Typography from '@mui/material/Typography';

export default function Category({categoryName, children}) {
    return (
        <Stack direction="column" spacing={1} className={styles.categoryBox}>
            <Typography className={styles.category} variant="p">
                {categoryName}
            </Typography>
            {children}
        </Stack>
    );
}