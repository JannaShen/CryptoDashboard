import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, type, qty, asset, exchangeRate, total, fee, status, updateTime) {
  return { id, type, qty, asset, exchangeRate, total, fee, status, updateTime};
}

const rows = [
  createData(
    0,
    'Deposit',
    '1.6626 ETH',
    'ETH',
    '2981.22AUD/ETH',
    4956.57,
    '10.13 AUD',
    'Completed',
    '15/05/2022 02:25PM'
  ),
  createData(
    1,
    'Market Sell',
    '704.72BUSD',
    'BUSD',
    '1.45AUD/BUSD',
    1015.80,
    '6.13 AUD',
    'Completed',
    '13/05/2022 12:27PM'
  ),
  createData(
    2,
    'Withdraw',
    '1.31837 ETH',
    'ETH',
    '3091.32AUD/ETH',
     4075.50,
    '8.20 AUD',
    'Completed',
    '09/05/2022 09:41PM'
  ),
  createData(
    3,
    'Deposit',
    '1.6626 ETH',
    'ETH',
    '3130.40AUD/ETH',
     5204.60,
    '11.12 AUD',
    'Completed',
    '09/05/2022 04:21PM'
  ),
  createData(
    4,
    'Withdraw',
    '1.0048 ETH',
    'ETH',
    '3211.28AUD/ETH',
     3226.69,
    '8.10 AUD',
    'Completed',
    '03/05/2022 10:28PM'
  ),
  createData(
    5,
    'Deposit',
    '1.2875 ETH',
    'ETH',
    '3150.48AUD/ETH',
     4056.24,
    '9.25 AUD',
    'Completed',
    '03/05/2022 04:08PM'
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Transaction</Title>
      <Table size="small" style={{overflowX:"auto"}}>
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Asset</TableCell>
            <TableCell>Exchange Rate</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Fee</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Updated At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.qty}</TableCell>
              <TableCell>{row.asset}</TableCell>
              <TableCell>{row.exchangeRate}</TableCell>
              <TableCell>{`${row.total} AUD`}</TableCell>
              <TableCell>{row.fee}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{row.updateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        View All
      </Link>
    </React.Fragment>
  );
}
