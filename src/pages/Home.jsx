import React from 'react'
import Sidenav from "../components/Sidenav";
import Box from '@mui/material/Box';
export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <div>Home</div>
    </Box>

  )
}
