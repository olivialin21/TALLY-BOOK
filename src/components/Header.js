import imgLogo from '../images/logo.png'
import imgIcnIg from '../images/icn_ig.png'
import imgIcnFb from '../images/icn_fb.png'
import imgIcnYt from '../images/icn_yt.png'
import { NavLink } from 'react-router-dom';

export default function Header() {
  const ELEMENTS = document.querySelectorAll(".HOVER");
  const ELEMENTS_SPAN = [];
  
  ELEMENTS.forEach((element, index) => {  
    // If The span element for this element does not exist in the array, add it.
    if (!ELEMENTS_SPAN[index])
      ELEMENTS_SPAN[index] = element.querySelector("span");

    element.addEventListener("mouseover", e => {
      ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
      ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
    });

    element.addEventListener("mouseout", e => {
      ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
      ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
    });
  });
  return(
    <header className="header">
      <NavLink to="/">
        <div className="logo">
          <img src={imgLogo} alt="GEGEU3U"/>
        </div>
      </NavLink>
      <div className="contact">
          <a href="https://www.instagram.com/define_twoowl_3g/?hl=zh-tw" target="_blank" rel="noreferrer">
              <img className="contact_icon" src={imgIcnIg} alt="ig"/>
          </a>
          <a href="https://www.facebook.com/groups/568827753582047" target="_blank" rel="noreferrer">
              <img className="contact_icon" src={imgIcnFb} alt="fb"/>
          </a>
          <a href="https://www.youtube.com/channel/UCmej5oymLBhl8X3TGrd7JKg/" target="_blank" rel="noreferrer">
              <img className="contact_icon" src={imgIcnYt} alt="yt"/>
          </a>
      </div>
      <div className="header_ripple">
          <div className="HOVER">
              <span></span>
          </div>
      </div>
    </header>
  );
}