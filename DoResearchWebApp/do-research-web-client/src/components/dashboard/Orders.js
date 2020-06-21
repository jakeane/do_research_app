import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '20 June, 2020',
    'Jack Keane',
    'Campbell \'s Super Study',
    'Vail, CO',
    1,
  ),
  createData(
    1,
    '20 June, 2020',
    'Ari Chadda',
    'Libtards United Study',
    'Hanover, NH',
    3,
  ),
  createData(
    2,
    '20 June, 2020',
    'Mike Hunt',
    'Mass General Study',
    'Boston, MA',
    1,
  ),
  createData(
    3,
    '20 June, 2020',
    'Michael Jackson',
    'El Rona Study',
    'Palo Alto, CA',
    12,
  ),
  createData(
    4,
    '20 June, 2020',
    'OJ Simpson',
    'Glove Don\'t Fit Study',
    'NYC, NY',
    6,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Responses</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Study</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="right">Survey Num</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more responses
        </Link>
      </div>
    </React.Fragment>
  );
}
