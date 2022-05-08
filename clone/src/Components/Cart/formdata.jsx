import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import{AddressBox,AddressBoxButton} from "../styled"
import{addressadd} from "../../Redux/Cart/Action"
import { useDispatch } from 'react-redux';
import{Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
export default function FormPropsTextFields() {
    const [obj, setobj] = React.useState({})
    const ref1=useRef()
    const ref2=useRef()
    const ref3=useRef()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleChange = (event) => {
      if(event.target.value.length=="")
      {
        event.target.style.border="1px solid red"
      }
      else if(event.target.value.length>=3)
      {
        event.target.style.border="none"
        setobj({...obj,[event.target.name]:event.target.value})
      }
    };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <AddressBox style={{position:"absolute",left:"25%"}}>
          <div style={{display:"flex",flexDirection:"column",marginLeft:"0%",marginBottom:"20px",marginTop:"10px"}}>
          <CallIcon/>      
          <h4 style={{position:"absolute",top:"1%",left:"8%"}}>Contact details</h4>
          <TextField ref={ref1}
          required
          id="standard-required"
          label="Name"
          variant="standard"
          name="name"
          onChange={handleChange}
        />
        <TextField ref={ref2}
          id="standard-password-input"
          label="Phone number"
          type="Number"
          autoComplete="current-password"
          variant="standard"
          name="phone"
          onChange={handleChange}
        />
          </div>
          <div style={{display:"flex",flexDirection:"column",marginLeft:"0%"}}>
          <LocationOnIcon/>
          <h4 style={{position:"absolute",top:"34%",left:"8%"}}>Address</h4>
          <TextField 
          id="standard-read-only-input"
          label="House.no./Building"
          variant="standard"
          name="houseno"
          onChange={handleChange}
        />
        <TextField
          id="standard-number"
          label="Road.name/area/colony"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
          name="road"
          onChange={handleChange}
        />
        <TextField ref={ref3}
          id="standard-search"
          label="Pincode"
          type="pincode"
          variant="standard"
          name="pincode"
          onChange={handleChange}
        />
        <div style={{display:"flex"}}>
        <TextField
          id="standard-helperText"
          label="City"
          helperText="*required"
          variant="standard"
          name="city"
          onChange={handleChange}
        />
          <TextField
          id="standard-helperText1"
          label="State"
          helperText="*required"
          variant="standard"
          name="state"
          onChange={handleChange}
        />
        </div> 
          </div>
          {/* <Link to={"/cart/address/3/payment"}> */}
           <AddressBoxButton onClick={(e)=>{
               e.preventDefault()
               console.log(obj,"check for store")
               let count=0;
               for(let key in obj)
               {
                   console.log(obj[key].length,"checking")
                   if(obj[key]!="" && obj[key].length>=3)
                   {
                       count++;
                   }
               }
               if(count<7)
               {
                   alert("fill in all details")
                   ref1.current.style.border="1px solid red";
                   ref2.current.style.border="1px solid red";
                   ref3.current.style.border="1px solid red";
               }
               if(count==7)
               {
                ref1.current.style.border="none";
                ref2.current.style.border="none";
                ref3.current.style.border="none";
                dispatch(addressadd(obj))
                navigate("/cart/address/3/payment",{replace:true})
               }
           }} >Save Address and Continue</AddressBoxButton>
          
      </AddressBox>
      
    </Box>
  );
}