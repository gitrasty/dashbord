import React from 'react'
import Sidenav from '../Sidenav/Sidenav'
import Navbar from '../Components/Navbar.jsx'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import '../Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../Components/AcordinationDash.jsx';
import BarChart from '../Chart/BarChart.jsx';
import CountUp from 'react-countup';


const Home = () => {
  return (
    <div className='bgcolor'>
      <Navbar />
      <Box height={70} />

      <Box sx={{ display: "flex" }}>

        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >

          <Grid container spacing={2} >

            <Grid item xs={8}>
              <Stack spacing={2} direction="row">


                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradint">

                  <CardContent className="icostyle">
                    <div>
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                      $<CountUp
                        end={500.00}
                        delay={0.2}
                        duration={0.3}

                      />

                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Total Earning
                    </Typography>
                  </CardContent>

                </Card>

                <Card sx={{ minWidth: 49 + "%", height: 150 }} className="gradintlight">

                  <CardContent>
                    <div className="icostyle">
                      <ShoppingBagIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                         $<CountUp
                        end={900.00}
                        delay={0.2}
                        duration={0.3}

                      />
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Total Order
                    </Typography>
                  </CardContent>

                </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack spacing={2} >
                <Card sx={{ maxWidth: 345 }} className="gradintlight">
                  <Stack spacing={2} direction="row" alignItems="center" >
                    <div className="icostyle">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                      <span className="pricetitle">$203k</span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>


                <Card sx={{ maxWidth: 345 }}>
                  <Stack spacing={2} direction="row" alignItems="center">
                    <div className="icostyleblack">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                      <span className="pricetitle">$210k</span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>

              </Stack>
            </Grid>

          </Grid>

          <Box height={20} />

          <Grid container spacing={2}>

            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>

                <CardContent>

                  <BarChart />
                </CardContent>

              </Card>

            </Grid>

            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>

                <CardContent>
                  <div className="paddingall">
                    <span className="pricetitle">       Pupular Products</span>
                    <br />
                  </div>

                  <AccordionDash />

                </CardContent>

              </Card>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default Home