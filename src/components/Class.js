import imgClassB from '../images/icn_home.svg'

export default function Class() {
  return(
    <div className="classes">
      <img className="classBtn-b" scr={imgClassB} alt="classBtn-b" />
      <div className="row d-flex">
        <div className="col">
          <div className="classItem">食</div>
        </div>
        <div className="col">
          <div className="classItem">衣</div>
        </div>
        <div className="col">
          <div className="classItem">住</div>
        </div>
        <div className="col">
          <div className="classItem classItem-in">收</div>
        </div>
        <div className="col">
          <div className="classItem">行</div>
        </div>
        <div className="col">
          <div className="classItem">樂</div>
        </div>
        <div className="col">
          <div className="classItem">其</div>
        </div>
      </div>
    </div>
  );
}