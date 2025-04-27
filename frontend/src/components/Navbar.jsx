 import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router';
import { Button ,IconButton,Typography} from '@mui/material';
import { useTheme } from '@emotion/react';
import { MdOutlineAddBox } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import {ColorModeContext} from "../App.jsx"



const Navbar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  console.log(theme, colorMode)
  return (
    <Box component="nav" sx={{display:'flex',alignItems:'center',justifyContent:'space-between' }}    >


      <Typography
        variant="h4"
        color="primary"
        component={Link}
        to="/"
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
        <Link to="/create">
        <Button variant="outlined" size="large" > <MdOutlineAddBox /> </Button>
        </Link>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} >
            {theme.palette.mode === 'dark' ? <FiSun/> : <h1>hi</h1>}
          </IconButton>
      </Stack>
    </Box>
  ) 
}

export default Navbar