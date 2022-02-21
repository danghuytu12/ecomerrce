import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function TableProduct({ product, isAdmin, deleteProduct, handleCheck }) {

    return (
        <Paper sx={{ width: '1200px', marginLeft: '875px' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                ID
                            </TableCell>
                            <TableCell>
                                Tên sản phẩm
                            </TableCell>
                            <TableCell>
                                Image
                            </TableCell>
                            <TableCell>
                                Giá sản phẩm
                            </TableCell>
                            <TableCell>
                                Description
                            </TableCell>
                            <TableCell>
                                Function
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow hover role="checkbox" tabIndex={-1} >
                            {/* <TableCell >
                                {product.title}
                            </TableCell> */}

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
export default TableProduct