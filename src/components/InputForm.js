import { NavLink } from 'react-router-dom';
import AddRecord from "../components/AddRecord"
import ImgHome from '../images/home.svg'

export default function InputForm() {
  return(
    <div className="col-md-5 col-sm-12">
      <form id="form" className="inputForm">
        <input placeholder="item..."/>
        <input type="number" placeholder="money..."/>
        <AddRecord/>
      </form>
      <div className="inputForm-home">
        <img src={ImgHome} alt="imgHome"/>
        <NavLink to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
}