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

function createData(id, name, calories) {
  return {
    id,
    name,
    calories,
  };
}

const rows = [
  createData(1, 'Bienestar', 305),
  createData(2, 'Capacitaciones', 452),
  createData(3, 'Construcción', 262),
  createData(4, 'Cultivos', 159),
  createData(5, 'Gastronomía', 356),
  createData(6, 'Indumentaria', 408),
  createData(7, 'Merchandasing', 237),
  createData(8, 'Muebles/Deco', 375),
  createData(9, 'Reciclaje', 518),
  createData(10, 'Tecnología', 392),
  createData(11, 'Transporte', 318),
];

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

  const isSelected = (id) => selected.indexOf(id) !== -1;

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
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
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
                      {row.name}
                    </TableCell>
                    <TableCell align="right" sx={{fontSize: '16px',
                       fontWeight: '700', 
                       lineHeight: '25px',
                       color: 'customColor.negro'
                       }}>
                        {row.calories}
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