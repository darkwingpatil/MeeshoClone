import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';
export default function BasicTextFields({fun}) {
    const {total} =useSelector((state)=>state)
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch', position:"absolute",left:"-3%",top:"140%;" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={`Order Total(₹ ${total}) + Your Margin`} variant="outlined" onChange={(e)=>fun(Number(e.target.value))} />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
}