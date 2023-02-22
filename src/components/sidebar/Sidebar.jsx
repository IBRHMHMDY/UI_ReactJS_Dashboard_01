import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
         <Link to="/" style={{textDecoration: "none"}}>
            <span className="logo">Self-Study</span>
         </Link>

      </div>
      <div className="center">
         <ul>
            <p className="title">Main</p>
            <Link to="/" style={{textDecoration: "none"}}>
               <li>
                  <DashboardIcon className='icon'/>
                  <span>Dashboard</span>
               </li>
            </Link>
            <Link to="/users" style={{textDecoration: "none"}}>
               <li>
                  <PeopleAltOutlinedIcon className="icon"/>
                  <span>Users</span>
               </li>
            </Link>
            <Link to="/products" style={{textDecoration: "none"}}>
               <li>
                  <InventoryIcon className="icon"/>
                  <span>Products</span>
               </li>
            </Link>
            <Link to="/" style={{textDecoration: "none"}}>
               <li>
                  <CreditCardIcon className="icon"/>
                  <span>Orders</span>
               </li>
            </Link>
            <li>
               <LocalShippingIcon className="icon"/>
               <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
               <BarChartIcon className="icon"/>
               <span>Stats</span>
            </li>

            <li>
               <NotificationsNoneOutlinedIcon className="icon"/>
               <span>Notifications</span>
            </li>
            <p className="title">SERVICES</p>
            <li>
               <HealthAndSafetyOutlinedIcon className="icon"/>
               <span>System Health</span>
            </li>
            <li>
               <FileCopyOutlinedIcon className="icon"/>
               <span>Logs</span>
            </li>
            <li>
               <SettingsOutlinedIcon className="icon"/>
               <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
               <AccountCircleIcon className="icon"/>
               <span>Profile</span>
            </li>
            <li>
               <LogoutOutlinedIcon className="icon"/>
               <span>Logout</span>
            </li>
         </ul>
      </div>
      <div className="bottom">
         <p className="title">Color Themes</p>
         <div className="colorOption"></div>
         <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar