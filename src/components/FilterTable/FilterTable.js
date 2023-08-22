import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { tableCellClasses } from '@mui/material/TableCell'; // Import tableCellClasses


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const FilterTable = () => {
  const [data, setData] = useState([]); // State to hold fetched data

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:5000/dashboard/get')
      .then(response => response.json())
      .then(data => {
        setData(data); // Store fetched data in state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <div className="container">
      <h1>FILTERS</h1>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Source</StyledTableCell>
              <StyledTableCell>Published</StyledTableCell>
              <StyledTableCell>Relevance</StyledTableCell>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell>Region</StyledTableCell>
              <StyledTableCell>Sector</StyledTableCell>
              <StyledTableCell>Topic</StyledTableCell>
              <StyledTableCell>Insight</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {item.title}
                </StyledTableCell>
                <StyledTableCell>{item.source}</StyledTableCell>
                <StyledTableCell>{item.published}</StyledTableCell>
                <StyledTableCell>{item.relevance}</StyledTableCell>
                <StyledTableCell>{item.country}</StyledTableCell>
                <StyledTableCell>{item.region}</StyledTableCell>
                <StyledTableCell>{item.sector}</StyledTableCell>
                <StyledTableCell>{item.topic}</StyledTableCell>
                <StyledTableCell>{item.insight}</StyledTableCell>
                
                  
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FilterTable;
