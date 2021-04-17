import { useEffect, useContext } from "react";
import { StoreContext } from "../store"
import { addRecord } from "../actions";

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
      // $("#error").addClass("none");
      // addRecord(dispatch, date, aClass, ps, cost);
      localStorage.setItem("info",[date, aClass, ps, cost]);
      alert("成功");
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
    <input className="inputForm-ok" type="submit" value="OK !" onClick={addRecord}/>
  );
}
