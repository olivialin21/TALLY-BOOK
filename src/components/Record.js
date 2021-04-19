import { stringToArray } from '../functions';

export default function Record() {
  let infoStr = localStorage.getItem("info") === null ? [] : JSON.stringify(localStorage.getItem("info")) ;
  let infoAry = stringToArray(infoStr);

  return(
    <div className="col-md-5 col-sm-12 record">
      <div className="record-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Company Name</th>
              <th scope="col">Number of Items to Ship</th>
              <th scope="col">Next Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adam's Greenworks</td>
              <td>14</td>
              <td>Package Items</td>
              <td rowspan="2">what</td>
            </tr>
            <tr>
              <td>Davie's Burgers</td>
              <td>2</td>
              <td>Send Invoice</td>
            </tr>
            <tr>
              <td>Baker's Bike Shop</td>
              <td>3</td>
              <td>Send Invoice</td>
            </tr>
            <tr>
              <td>Miss Sally's Southern</td>
              <td>4</td>
              <td>Ship</td>
            </tr>
            <tr>
              <td>Summit Resort Rentals</td>
              <td>4</td>
              <td>Ship</td>
            </tr>
            <tr>
              <td>Strike Fitness</td>
              <td>1</td>
              <td>Enter Order</td>
            </tr>
          </tbody>
          <tfoot>
            <td>Total</td>
            <td>28</td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}