import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

export function DataGridUser({users}) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        {
          field: 'name', headerName: 'name', width: 190, renderCell: (Params) =>{
            return(
              <div className='name'>
                <img src={Params.row.avatar} alt='' />
                {Params.row.name}
              </div>
            )
          }
        },
        { field: 'family', headerName: 'Family', width: 130 },
        { field: 'email', headerName: 'Email', width: 200, 
      },
        { field: 'password', headerName: 'Password', width: 130, 
      },
    
      ];
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 175px)' }}>
    <DataGrid rows={users} disableSelectionOnClick columns={columns} pageSize={11} checkboxSelection />
  </div>
  )
}


export function DataGridSong() {
    return (
      <div>DataGridUser</div>
    )
  }
  