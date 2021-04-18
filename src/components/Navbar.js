import ImgHome from '../images/home.svg'
import ImgSetting from '../images/setting.png'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    console.log("open");
  };
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    console.log("close");
  }
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <div className="closeBtn" onClick={closeNav}>
          &times;
        </div>
        <NavLink to="/">
          <img className="nav-icn-home" src={ImgHome} alt="ImgHome" />
          Home
        </NavLink>
        <NavLink to="/setting">
          <img className="nav-icn-setting" src={ImgSetting} alt="ImgSetting"/>
          Setting
        </NavLink>
        <div className="nav-contact">
          <a href="https://www.facebook.com/groups/568827753582047" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/define_twoowl_3g/?hl=zh-tw" target="_blank" rel="noreferrer">
            instagram
          </a>
          <a href="https://www.youtube.com/channel/UCmej5oymLBhl8X3TGrd7JKg/" target="_blank" rel="noreferrer">
            Youtube
          </a>
        </div>
      </div>

      <span className="hamBtn" onClick={openNav}>&#9776;</span>
    </>
  );
}