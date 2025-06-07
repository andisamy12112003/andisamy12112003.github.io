import { FaMoon, FaSun } from "react-icons/fa";
import "../index.css"
import { useNavigate ,NavLink } from "react-router";
import Cookies from "js-cookie"
import { AppContext } from "./Context";
import { useContext, useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { IoReorderThree } from "react-icons/io5";

const Header = () => { 
  const navigate = useNavigate()
  const {setAuthenticated,authenticated} = useContext(AppContext)
  const [showList,setShowList] = useState(false)
  const {lightmode,setLightMode} = useContext(AppContext)
  console.log(lightmode)
  const modeChnage = () => {
    setLightMode(!lightmode)
  }
  const showListBtn = () => {
    setShowList(!showList)
  }

  const logoutHomePage = () => {
    navigate("/login",{replace:true})
    Cookies.remove("jwt_token")
    setAuthenticated(false)
    Cookies.set("auth",authenticated,{expires:1200200})
  }

  return (
    <div className={`header-container-main ${lightmode?null:"darkMode"}`} >
      <div className='header-main-container'>
        <div>
          <img className='header-logo logo ' src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="next-logo" />
        </div>
        <div className='profile-button-container'>
            <div onClick={modeChnage}>{lightmode? (<FaMoon className='moon-sun moon-sm'/>):(<FaSun className='moon-sun moon-sm'/>)}</div>
            <img className='profile-image logout-btn' src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="profile" />
            <button className='button-logout logout-btn ' onClick={logoutHomePage}>Logout</button> 
            <IoReorderThree size={26} className="list-sm" onClick={showListBtn} />           
            <LuLogOut className="logout-sm"  onClick={logoutHomePage}/>
        </div>
    </div>
    <div className={`${showList ? null : "hidelist"} list-md`}>
        <ul className={`ul ${lightmode?null:"darkMode"}`}>
            <NavLink to="/" className={`link ${lightmode?null:"darkMode"}`}><li>Home</li></NavLink>
            <NavLink to="/trending" className={`link ${lightmode?null:"darkMode"}`}><li>Trending</li></NavLink>
            <NavLink to="/gaming" className={`link ${lightmode?null:"darkMode"}`}><li>Gaming</li></NavLink>
            <NavLink to="/saved" className={`link ${lightmode?null:"darkMode"}`}><li>Saved Videos</li></NavLink>
          </ul>
        </div>
    </div>
  )
}

export default Header