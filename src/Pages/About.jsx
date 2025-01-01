import React from 'react'
import Sidenav from '../Sidenav/Sidenav'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar.jsx'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Box height={30}/>
      <Box sx={{ display: "flex" }}>

        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <h1>About</h1>

        </Box>
      </Box>
    </div>
  )
}

export default About