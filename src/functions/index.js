export const stringToArray = (infoStr) => {
  let count = parseInt(localStorage.getItem("count"));
  let tempAry2 = [];
  let tempAry3 = [];
  let infoAry = [];
  if (count > 0){
    infoStr = infoStr.replace(new RegExp('"', 'g'), '');
    tempAry2 = infoStr.split(",");
    for (let i=0;i<count;i++){
      tempAry3 = tempAry2.slice(i*4,(i*4+4));
      infoAry.push(tempAry3);
    }
  }
  return (infoAry);
} 

export const calSum = () => {
  let count = parseInt(localStorage.getItem("count"));
  let infoStr = localStorage.getItem("info") === null ? [] : JSON.stringify(localStorage.getItem("info")) ;
  let infoAry = stringToArray(infoStr);
  let totOut = 0;
  let totIn = 0;

  for (let i=0;i<count;i++){
    if (infoAry[i][1]==="in") {
      totIn += parseInt(infoAry[i][3]);
    } else {
      totOut += parseInt(infoAry[i][3]);
    }
  }

  return ([totIn,totOut]);
}

export const calSumDay = (infoAry) => {
  let totOut = 0;
  let totIn = 0;

  for (let i=0;i<count;i++){
    if (infoAry[i][1]==="in") {
      totIn += parseInt(infoAry[i][3]);
    } else {
      totOut += parseInt(infoAry[i][3]);
    }
  }

  return ([totIn,totOut]);
}