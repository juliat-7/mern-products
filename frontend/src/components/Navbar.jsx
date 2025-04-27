 import React from 'react'
import { Link } from 'react-router';
import { Button ,IconButton,Typography,Stack,Box} from '@mui/material';
import { useTheme } from '@emotion/react';
import { MdOutlineAddBox } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import {ColorModeContext} from "../App.jsx"



const Navbar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  console.log(theme, colorMode)
  return (
    <Box component="nav" sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}  p={2}   >


      <Typography variant="h4" color="primary" component={Link} to="/"
        sx={{
          textDecoration: 'none',
          marginLeft: '30px',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Products
      </Typography>

      <Stack direction={"row"} spacing={1} >
        <IconButton color="primary" size="medium" component={Link}to="/create"> 
          <MdOutlineAddBox /> 
        </IconButton>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}  color="primary" size="medium">
          {theme.palette.mode === 'dark' ? <FiSun/> : <FiMoon/>}
        </IconButton>
      </Stack>
    </Box>
  ) 
}

export default Navbar