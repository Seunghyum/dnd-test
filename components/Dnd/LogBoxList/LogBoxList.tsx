import { FC } from 'react'
import { LogBox } from './LogBox'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export interface BoxProps {
  attrNames: string[]
  data: string[]
  ItemType: string
}

export const LogBoxList: FC<BoxProps> = ({ attrNames, data, ItemType }) => {
  
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 800 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {attrNames.map((attrName, i) => (<TableCell key={i}>{attrName}</TableCell> ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => <LogBox ItemType={ItemType} key={i} dataRow={attrNames.map(attrName => row[attrName])} />)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
