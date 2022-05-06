import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldSizes1({num}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },position:"absolute",top:"62.2%",left:"45%"
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-size-small"
          size="small"
          variant="standard"
          placeholder='Phone Number'
          onChange={(e)=>num(e.target.value)}
        />
      </div>
    </Box>
  );
}