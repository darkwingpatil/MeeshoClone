import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldSizes() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '8ch' },position:"absolute",top:"60%",left:"39%"
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Country"
          id="standard-size-small"
          defaultValue="🇮🇳 +91"
          size="small"
          variant="standard"
        />
      </div>
    </Box>
  );
}