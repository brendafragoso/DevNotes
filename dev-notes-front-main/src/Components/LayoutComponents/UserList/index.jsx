import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Nome Completo',
        width: 150,
        editable: true,
        sortable: true,
    },

    {
        field: 'email',
        headerName: 'e-mail',
        width: 150,
        sortable: true,
        editable: true,
    },
];



export default function DataGridDemo({setUserData ,usersData}) {
    const [rows, setRows] = React.useState(usersData)
    const [rowSelectionModel, setRowSelectionModel] = React.useState([])
    const [key, setKey] = React.useState(0);

    console.log(rows)

    React.useEffect(() => {
        const fetchData = async () => {
            console.log(rowSelectionModel);
            console.log(rows[rowSelectionModel - 1]);
            setUserData(rows[rowSelectionModel - 1]);
        };
    
        fetchData();
    }, [rowSelectionModel]);
    
    React.useEffect(() => {
        setRows(usersData);
        setKey(prevKey => prevKey + 1);
      }, [usersData]);

    console.log(rowSelectionModel)
    

    return (
        <Box sx={{ height: 600, width: '100%'}}>
            <DataGrid
                key={key}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    setRowSelectionModel(newRowSelectionModel);
                  }}
                rowSelectionModel={rowSelectionModel}
                checkboxSelection
                disableMultipleRowSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
