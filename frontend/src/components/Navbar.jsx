import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router';
import { MdOutlineAddBox } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { Button } from '@mui/material';


const Navbar = () => {
  return (
    <Box component="nav" style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginLeft:'30px' }}>
        <h1>Products</h1>
      </Link> 
      <Stack direction={"row"} spacing={1} sx={{ml:'auto'}}>
        <Link to="/create">
        <Button><MdOutlineAddBox style={{ fontSize: '25px',color:"black" }}/></Button>
        </Link>
        <Button><LuMoon style={{ fontSize: '25px',color:"black"}}/></Button>
      </Stack>
    </Box>
  )
}

export default Navbar