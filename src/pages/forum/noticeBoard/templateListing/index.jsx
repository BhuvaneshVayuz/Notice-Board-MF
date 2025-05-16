import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import DeleteIcon from '@mui/icons-material/Delete';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Template Name1', "Upcoming Team Collaboration Event on Confluence	"),
  createData('Template Name2', "Upcoming Team Collaboration Event on Confluence	"),
  createData('Template Name3', "Upcoming Team Collaboration Event on Confluence	"),
  createData('Template Name4', "Upcoming Team Collaboration Event on Confluence	"),
  createData('Template Name5', "Upcoming Team Collaboration Event on Confluence	"),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Template Name</TableCell>
            <TableCell align="center">Subject</TableCell>
            <TableCell align="right">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.name}</TableCell>
              <TableCell component="th" scope="row" >
                {row.calories}
              </TableCell>
              <TableCell align="right">
                <div className='cursor-pointer'><EditDocumentIcon className='text-gray-400'/> <DeleteIcon/></div>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
