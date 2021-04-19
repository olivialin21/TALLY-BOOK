import { useEffect, useContext } from "react";
import { StoreContext } from "../store"
import { addRecord } from "../actions";
import sound from "../audios/coin.mp3";

export default function AddRecord() {
  // const { state: { date, aClass } , dispatch } = useContext(StoreContext);
  const date = localStorage.getItem("date") ? localStorage.getItem("date") : new Date();
  const countInit = () => localStorage.getItem("count") ? localStorage.getItem("count") : localStorage.setItem("count",0);
  countInit();
  let count = parseInt(localStorage.getItem("count"));

  const addRecord = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("form");
    const ps = formElement[0].value;
    const cost = formElement[1].value;
    console.log(ps);
    console.log(cost);
    
    if (ps!=='' && cost!==''){
      (new Audio(sound)).play();
      // addRecord(dispatch, date, aClass, ps, cost);
      let tempAry = localStorage.getItem("info") === null ? [] : JSON.stringify(localStorage.getItem("info")) ;
      let tempAry2 = [];
      let tempAry3 = [];
      let infoAry = [];
      if (count !== 0){
        tempAry = tempAry.replace(new RegExp('"', 'g'), '');
        tempAry2 = tempAry.split(",");
        for (let i=0;i<count;i++){
          tempAry3 = tempAry2.slice(i*3,(i*3+3));
          console.log(tempAry3);
          infoAry.push(tempAry3);
        }
      }
      infoAry.push([date, ps, cost]);
      console.log(infoAry);
      localStorage.setItem("info",infoAry);
      count++;
      localStorage.setItem("count",count);
      document.getElementById("form").reset();
    }
    else {
      alert("還有空格");
    }
  };

  return (
    <input className="animate__animated animate__bounce inputForm-ok" type="submit" value="OK !" onClick={addRecord}/>
  );
}
