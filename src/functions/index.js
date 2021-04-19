export const stringToArray = (infoStr) => {
  let count = parseInt(localStorage.getItem("count"));
  let tempAry2 = [];
  let tempAry3 = [];
  let infoAry = [];
  if (count !== 0){
    infoStr = infoStr.replace(new RegExp('"', 'g'), '');
    tempAry2 = infoStr.split(",");
    for (let i=0;i<count;i++){
      tempAry3 = tempAry2.slice(i*4,(i*4+4));
      console.log(tempAry3);
      infoAry.push(tempAry3);
    }
  }
  return (infoAry);
} 