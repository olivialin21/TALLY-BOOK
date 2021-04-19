import { calSum } from "../functions";

export default function Statistics() {

  return(
    <div className="info">
      <div className="info-ratio pl-4">
        收支比：{calSum()[0]} / {calSum()[1]}
      </div>
      <div className="info-bal pl-4">
        本月：{calSum()[0]-calSum()[1]}
      </div>
    </div>
  );
}