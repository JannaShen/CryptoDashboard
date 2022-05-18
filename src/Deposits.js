import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function handlePageChange(event) {
  window.location.href="/deposit"
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Current Balance</Title>
      <Typography component="p" variant="h4">
        0.14124 BTC
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
       ≈ 5899.42 AUD
      </Typography>
      <div>
        <Link color="primary" to="/deposit" onClick={handlePageChange} >
          Deposit
        </Link>
      </div>
    </React.Fragment>
  );
}
