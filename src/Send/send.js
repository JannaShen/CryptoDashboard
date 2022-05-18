import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { InputLabel, Select, MenuItem, TextField, FormControl, Button} from '@mui/material';
import { mdTheme } from '../dashboard';
import { Typography } from '@mui/material';

export default function Transfer(){
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
              Transfer Crypto
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
            <FormControl style={{textAlign:"left"}} sx={{width:"50%", mt:10}}>
              <Box style={{display:"flex"}} sx={{mb:4}}>
            <Typography id="coin-simple-select-label" sx={{width:"30%"}} >Select Coin</Typography>
            <Select
             name="coin-select-label"
             id="coin-select"
             label="coin"
             fullWidth
            >
              <MenuItem value="BTC">BTC</MenuItem>
              <MenuItem value="USDT">USDT</MenuItem>
              <MenuItem value="ETH">ETH</MenuItem>
            </Select>
            </Box>
            <Box  style={{display:"flex"}} sx={{mb:4}}>
            <Typography id="coin-simple-select-label" sx={{width:"30%"}}>Send to</Typography>
            <TextField fullWidth id="address" label="Enter Address" variant="outlined" />
            </Box>
            <Box  style={{display:"flex"}} sx={{mb:4}}>
            <Typography id="network-select-label" sx={{width:"30%"}}>Select Withdrawal network</Typography>
            <Select
             fullWidth
             labelId="network-select-label"
             id="network-select"
             label="network"
            >
              <MenuItem value="BSC">BNB Smart Chain (BEP20)</MenuItem>
              <MenuItem value="BNB">BNB Beacon Chain (BEP20)</MenuItem>
              <MenuItem value="ETH">Ethereum (ERC20)</MenuItem>
            </Select>
            </Box>
            
              <Button type="submit" style={{backgroundColor:"#2196f3", color:"white"}} sx={{width:"40%", m: "auto", mt:5, minWidth:"100px"}}>Continue</Button>
            
            </FormControl>
        </Box>
        </ThemeProvider>
    )
}