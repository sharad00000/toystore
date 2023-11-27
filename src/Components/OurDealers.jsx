import { Stack, Typography,Paper,Card } from '@mui/material'
import React from 'react'
import './OurDealers.css'
const OurDealers = () => {
  return (
    <Paper className='back' elevation={12} style={{backgroundColor:"darkgrey",margin:"60px",width:"1350px",display:"grid",alignContent:"center"}}>
       <Typography variant='h2'style={{color:"white",fontFamily:"cursive"}}>
        <center>
        Our Suppliers
        </center>
       </Typography>
       
       <Stack direction="row" spacing={4} style={{margin:"20px",}}>
        <Card elevation={24}>
        <img width="300px" height="200px" src='https://toybox.com.cy/cdn/shop/collections/nerf-toybox_1200x1200.png?v=1688706297'></img>
        </Card>
        <Card elevation={24}>
        <img width="300px" height="200px" src='https://logos-world.net/wp-content/uploads/2022/09/Mattel-Logo-500x281.png'></img>
        </Card>
        <Card elevation={24}>
        <img width="300px" height="200px" src='https://logos-world.net/wp-content/uploads/2021/08/Hot-Wheels-Logo.png'></img>
        </Card>
        <Card elevation={24}>
        <img width="300px" height="200px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png'></img>
        </Card>
        
       </Stack>

    </Paper>
  )
}

export default OurDealers