import { stringToArray , calSum , calSumDay } from '../functions';

export default function Record() {
  const date = localStorage.getItem("date") ? localStorage.getItem("date") : new Date();
  let infoStr = localStorage.getItem("info") === null ? [] : JSON.stringify(localStorage.getItem("info")) ;
  let infoAry = stringToArray(infoStr);
  let info = [];
  const infoFliter = () => {infoAry.map((Ary)=>{
    if (Ary[0]===date){
      info.push(Ary);
    }
  })};
  infoFliter();

  return(
    <div className="col-md-5 col-sm-12 record">
      <div className="record-block">
        <table className="record-table">
          <thead>
            <tr>
              <th scope="col">items</th>
              <th scope="col" className="record-table-r">balance</th>
            </tr>
          </thead>
          <tbody>
            {info.map(info =>
              <tr>
                <td>{info[2]}</td>
                <td className="record-table-r">{info[3]}</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <td>Total</td>
            <td className="record-table-r">{calSumDay(info)[0]-calSumDay(info)[1]}</td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}