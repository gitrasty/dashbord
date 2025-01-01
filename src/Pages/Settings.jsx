import React from 'react'
import Sidenav from '../Sidenav/Sidenav'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar.jsx'
import SettingList from './Settings/SettingList.jsx';

const Settings = () => {
  return (
    <div className='bgcolor'>
      <Navbar/>
      <Box height={70}/>
      <Box sx={{ display: "flex" }}>

        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <SettingList/>

        </Box>
      </Box>
    </div>
  )
}

export default Settings