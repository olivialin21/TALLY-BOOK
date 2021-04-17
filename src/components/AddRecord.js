import { useEffect, useContext } from "react";
import { StoreContext } from "../store"
import { addRecord } from "../actions";
import sound from "../audios/coin.mp3";

export default function AddRecord() {
  const { state: { date, aClass } , dispatch } = useContext(StoreContext);
  
  const addRecord = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("form");
    const ps = formElement[0].value;
    const cost = formElement[1].value;
    console.log(ps);
    console.log(cost);

    if (ps!=='' && cost!==''){
      (new Audio(sound)).play();
      // $("#error").addClass("none");
      // addRecord(dispatch, date, aClass, ps, cost);
      localStorage.setItem("info",[date, aClass, ps, cost]);
      document.getElementById("form").reset();
    }
    else {
      alert("還有空格");
    }

    // document.getElementById("form").reset();
    // localStorage.setItem("info",[date, aClass, ps, cost])
  };

  // useEffect(()=>{
  //   localStorage.setItem("info",[date, aClass, ps, cost]);
  // }, [])

  return (
    <input className="animate__animated animate__bounce inputForm-ok" type="submit" value="OK !" onClick={addRecord}/>
  );
}
