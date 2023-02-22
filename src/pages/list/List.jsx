import "./list.scss"
import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
const List = () => {
   return(
      <div className="list">
         <Sidebar />
         <div className="listContainer">
            <Navbar />
            <Datatable/>
         </div>
      </div>
   )
}

export default List