export default function Class() {
  const classInit = () => localStorage.getItem("class") ? localStorage.getItem("class") : localStorage.setItem("class","");
  classInit();

  const clickEat = () => {
    localStorage.setItem("class","eat");
  }
  const clickClothes = () => {
    localStorage.setItem("class","clothes");  
  }
  const clickLive = () => {
    localStorage.setItem("class","live");  
  }
  const clickIn = () => {
    localStorage.setItem("class","in");  
  }
  const clickTraffic = () => {
    localStorage.setItem("class","traffic");  
  }
  const clickPlay = () => {
    localStorage.setItem("class","play");  
  }
  const clickElse = () => {
    localStorage.setItem("class","else");  
  }

  return(
    <div className="classes">
      <div className="row d-flex">
        <div className="col-lg col-6 class-rwd-l">
          <div onClick={clickEat} className="classItem">食</div>
        </div>
        <div className="col-lg col-6">
          <div onClick={clickClothes} className="classItem">衣</div>
        </div>
        <div className="col-lg col-4 class-rwd-l">
          <div onClick={clickLive} className="classItem">住</div>
        </div>
        <div className="col-lg col-4 class-rwd-c">
          <div onClick={clickIn} className="classItem classItem-in">收</div>
        </div>
        <div className="col-lg col-4">
          <div onClick={clickTraffic} className="classItem">行</div>
        </div>
        <div className="col-lg col-6 class-rwd-l">
          <div onClick={clickPlay} className="classItem">樂</div>
        </div>
        <div className="col-lg col-6">
          <div onClick={clickElse} className="classItem">其</div>
        </div>
      </div>
    </div>
  );
}