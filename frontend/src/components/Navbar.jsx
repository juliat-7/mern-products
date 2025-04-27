import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router';
import { MdOutlineAddBox } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { Button,useTheme } from '@mui/material';


const Navbar = () => {
  const theme = useTheme()
  const palette = theme.palette
  return (
    <Box component="nav" sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit', marginLeft:'30px' }}>
        <h1>Products</h1>
      </Link> 
      <Stack direction={"row"} spacing={1} sx={{ml:'auto',mr:2}}>
        <Link to="/create">
        <Button color='primary'><MdOutlineAddBox sx={{ fontSize: '25px',color:palette.primary.main }}/></Button>
        </Link>
        <Button><LuMoon sx={{ fontSize: '25px',color:palette.primary.main}}/></Button>
      </Stack>
    </Box>
  ) 
}

export default Navbar