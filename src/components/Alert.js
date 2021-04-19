import ImgAlertW from "../images/alert_w.png"
import ImgAlertC from "../images/alert_c.png"

const alertW=()=>{
  document.getElementById("alert").classList.add("display-none");
  document.getElementById("alert-w").classList.add("display-none");
}
const alertC=()=>{
  document.getElementById("alert").classList.add("display-none");
  document.getElementById("alert-c").classList.add("display-none");
}

export default function Alert() {
  return (
    <div id="alert" className="alert display-none">
      <div id="alert-w" className="alert-w display-none">
        <div onClick={alertW} className="alert-x">x</div>
        <img src={ImgAlertW}/>
      </div>
      <div id="alert-c" className="alert-w display-none">
        <div onClick={alertC} className="alert-x alert-c-x">x</div>
        <img src={ImgAlertC}/>
      </div>
    </div>
  );
};