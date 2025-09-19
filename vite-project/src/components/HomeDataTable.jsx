import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactSelector from "./ReactSelect";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData("Mine cloud", "2:16 min", "15 - 09 - 25", "page-1"),
  createData("Blue Chips Chicago", "2:56 min", "16 - 09 - 25", "blue-chips-page-2"),
  createData("Awsmd", "Running", "16 - 09 - 25", "awsmd"),
  createData("Finance Product", "Running", "16 - 09 - 25", "finance-product"),
];

export default function AllPages() {

  const navigate = useNavigate();

  const redirectData = (direction) => {
    navigate(`/${direction}`)
  }
  
  return (
    <div className="flex p-50">
      <ReactSelector />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Page Name</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Date&nbsp;(D)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => redirectData(row.carbs)}
                className=""
              >
                  <TableCell component="th" scope="row" className="cursor-pointer">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
