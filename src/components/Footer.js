import ImgFeedback from '../images/feedback.svg'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return(
    <>
      <NavLink to="/feedback" className="nav-item nav-feedback">
        <img src={ImgFeedback} alt="nav-feedback"/>
        Feedback
      </NavLink>
      <p className="footer">
        © 2021 Chao-Chi Cheng & Yu-Shan Lin All rights reserved.
      </p>
    </>
  );
}