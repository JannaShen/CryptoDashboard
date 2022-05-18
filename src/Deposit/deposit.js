import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { mdTheme } from '../dashboard';
import { useState } from 'react';

  export default function DepositAUD(){
    const [amount, setAmount] = useState(0.00);

    const onChangeAmount=(event)=>{
      setAmount(event.target.value);
    }
    return(
      <ThemeProvider theme={mdTheme}> 
      <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'}}
         >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
            style={{backgroundColor:'#2196f3'}}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Deposit AUD
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
          <Grid container sx={{ mt: 4, mb: 4 }}>
            <Grid item xs={12} md={6} sx={{p:4}} style={{textAlign:"left"}}>
                <Typography variant="h2" sx={{mb:2}} style={{fontSize:"1.5rem"}}> Enter Amount</Typography>
                <form>
            <div>
              <TextField name="Amount" hintText="Enter 50-70000" label="Enter 50-70000 AUD" onChange={onChangeAmount}/>
            </div>
            <Box sx={{mt:2}} style={{fontSize:"1rem"}}>
              You receive:
              {amount} AUD
              <Typography component="h5">
                  Transaction Method: PayID/Osko
                  <br/>
                  Transaction Fee: 0.00 AUD
              </Typography>
            </Box>
            
            <Button type="submit" sx={{mt:3}} style={{backgroundColor:"#2196f3", color:"white"}}>Continue</Button>

          </form>
            </Grid>
            <Grid item  xs={12} md={6} style={{textAlign:"left"}} sx={{p:3}}>
             
                <Typography compomnent="h5" sx={{mb:3}} style={{fontSize:"1.3rem"}}>Notice</Typography>

                <Typography compomnent="h6" sx={{mb:2}}>Deposits will only be refunded if the deposit is greater than AU$10.</Typography>
                <Typography compomnent="h6" sx={{mb:2}}>Your PayID is solely for accepting AUD deposits into your exchange wallet.</Typography>
                <Typography compomnent="h6" sx={{mb:1}}>Transfer money to proceed with order</Typography>
            </Grid>

        </Grid>
        
      </Box>
      </ThemeProvider>
    );
}