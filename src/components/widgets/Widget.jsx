import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Widget = ({type}) => {
  let data;
  
  const count = 1250;
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        status: <KeyboardArrowUpOutlinedIcon style={{color: "green"}}/>,
        link: "See all Users",
        icon: <PersonOutlineOutlinedIcon className='icon' style={{backgroundColor: "rgba(255,0,0,0.2)", color: "red"}}/>
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: true,
        status: <KeyboardArrowDownOutlinedIcon style={{color: "red"}}/>,
        link: "View all Orders",
        icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{backgroundColor: "rgba(218,165,32,0.2)", color: "goldenrod"}}/>
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        status: <KeyboardArrowUpOutlinedIcon style={{color: "green"}}/>,
        link: "View net Earnings",
        icon: <ShoppingCartOutlinedIcon className='icon' style={{backgroundColor: "rgba(0,128,0,0.2)", color: "green"}}/>
      };
      break;
    case "balance":
      data = {
        title: "BALANCES",
        isMoney: true,
        status: <KeyboardArrowDownOutlinedIcon style={{color: "red"}}/>,
        link: "View Details",
        icon: <MonetizationOnOutlinedIcon className='icon' style={{backgroundColor: "rgba(128,0,128,0.2)", color: "purple"}}/>
      };
      break;
    default:
      break;
  }


  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney? amount + "$"  : count }</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
          {data.status}
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget