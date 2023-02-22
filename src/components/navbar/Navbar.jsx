import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <SearchOutlinedIcon className='icon-search'/>
          <input type="search" placeholder='Search...'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon/>
            <span>EN</span>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon/>
          </div>
          <div className="item">
            <img src="https://secure.gravatar.com/avatar/e89584fc717a92922689cb33ab29dd93?s=160&d=https%3A%2F%2Fcss-tricks.com%2Fimages%2Fget-gravatar.png&r=PG" alt="avatar" className='avatar'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar