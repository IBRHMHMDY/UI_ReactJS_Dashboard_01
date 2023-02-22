import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget'
import Table from '../../components/tables/Table'
import './home.scss'
const Home = () => {
   return(
      <div className="home">
         <Sidebar />
         <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
               <Widget type="user"/>
               <Widget type="order"/>
               <Widget type="earning"/>
               <Widget type="balance"/>
            </div>
            <div className="charts">
               <Featured/>
               <Chart title={"Total Last 6 month"} aspect={2 / 1}/>
            </div>
            <div className="tableSection">
               <div className="titleSection">Latest Transactions</div>
               <Table />
            </div>
         </div>
      </div>
   )
}

export default Home