import sound from "../audios/coin.mp3";
import { stringToArray } from "../functions";

export default function AddRecord() {
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
      let aClass = (localStorage.getItem("class"));
      let infoStr = localStorage.getItem("info") === null ? [] : JSON.stringify(localStorage.getItem("info")) ;
      let infoAry = stringToArray(infoStr);
      infoAry.push([date, aClass, ps, cost]);
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
