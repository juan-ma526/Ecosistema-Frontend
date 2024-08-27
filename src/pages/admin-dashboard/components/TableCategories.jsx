import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import axios from "axios";
import { useState,useEffect } from "react";

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
        <Typography
          sx={{ flex: '1 1 100%', 
            textAlign: 'center',
            color: 'customColors.violeta',
            fontWeight: '600',
            fontSize: '20px'
          }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Proveedores por Categoría
        </Typography>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [selected, setSelected] = React.useState([]);
  const [rows,SetRows] = useState([]);
  const [loading,SetLoading] = useState(false);

  const isSelected = (id) => selected.indexOf(id) !== -1;

  useEffect(() => {
        const cargarDatos = async() => {
          try {
            const url = import.meta.env.VITE_API_BASE_URL + "/proveedoresPorCategoria";
            const token = JSON.parse(localStorage.getItem('token'));
            const response = await axios.get(url, {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                },
            });
            if(response.status == 200) {
              SetRows(Object.entries(response.data));
              SetLoading(true);
            } else {
              console.log('error');
            }
          }
          catch(error) {
            console.log(error);
          }
        }
        cargarDatos();
      }, []);


  return (
    <Box sx={{ width: '90%', margin: '10px auto'}}>
      <Paper sx={{ 
          width: '100%',
          mb: 2,
          backgroundColor: 'customColors.grisClaro',
          borderRadius: '15px',
        }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <Divider variant="left" sx={{
            marginLeft: '5%', 
            border: '1.5px solid',
            borderColor: 'customColors.violeta',
            marginRight:'5%'
        }}/>
        <TableContainer sx={{ padding: "0px 30px"}}>
          <Table
            sx={{ minWidth: 300 }}
            aria-labelledby="tableTitle"
            size={'small'}
          >
            <TableBody>
              {loading && rows.map((row, index) => {
                const isItemSelected = isSelected(row[0]);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{fontSize: '16px', 
                        fontWeight: '500', 
                        lineHeight: '25px',
                        color: 'customColor.negro'
                      }}
                    >
                      {row[0]}
                    </TableCell>
                    <TableCell align="right" sx={{fontSize: '16px',
                       fontWeight: '700', 
                       lineHeight: '25px',
                       color: 'customColor.negro'
                       }}>
                        {row[1]}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}