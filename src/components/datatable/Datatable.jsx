import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatableSource'
import { Link } from "react-router-dom";


const Datatable = () => {
   const actionColumn = [{field: "action", headerName: "Action", width: "200", renderCell: ()=>{
      return (
         <div className="cellAction">
            <Link to="/products/test" style={{textDecoration: "none"}}>
              <div className="btnView">View</div>
            </Link>
            <div className="btnDelete">Delete</div>
         </div>
      )
   }}]
  return (
    <div className='datatable'>
      <div className="dtTitle">
      <h1>Users</h1>
      <Link to="/users/new" style={{textDecoration: "none"}} className="link">
        Add New
      </Link>

      </div>
      <DataGrid
      className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable