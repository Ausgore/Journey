import React from 'react';
import { TextField } from '@mui/material';
import styles from "./StatelessMailField.module.scss";
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

export default function StatelessMailField() {
  return (
    <TextField InputLabelProps={{ shrink: true }} className={styles.input}
      placeholder="ExampleEmail@gmail.com"
      sx={{
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: "green", borderRadius: "10px",
        }
      }}
      InputProps={{
        endAdornment: (
          <IconButton className={styles.btn}>
            <SendIcon />
          </IconButton>
        ),
      }} />
  );
}