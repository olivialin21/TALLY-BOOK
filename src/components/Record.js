import { useEffect , useState} from 'react';
import { stringToArray , calSum } from '../actions/functions';

export default function Record() {
  let infoStr = localStorage.getItem("info") === null ? [] : JSON.stringify(localStorage.getItem("info")) ;
  let infoAry = stringToArray(infoStr);
  // const [info , setInfo] = useState(infoAry);


  // useEffect(() => {  
  //   window.addEventListener('storage', () => {
  //     infoStr = localStorage.getItem("info") === null ? [] : JSON.stringify(localStorage.getItem("info")) ;
  //     infoAry = stringToArray(infoStr);
  //     setInfo(info);
  //   });
  // }, [])

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
            {infoAry.map(info =>
              <tr>
                <td>{info[2]}</td>
                <td className="record-table-r">{info[3]}</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <td>Total</td>
            <td className="record-table-r">{calSum()[0]-calSum()[1]}</td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}