export default function Remind() {
  let imgAry = [require('../images/remind1.png'),require('../images/remind2.png'), require('../images/remind3.png'),require('../images/remind4.png'),require('../images/remind5.png')];
  let randomNum = Math.floor(Math.random() * imgAry.length);
  let imgRemind = imgAry[randomNum].default;

  return(
    <div className="col-md-2 remind">
      <img src={imgRemind} alt="ImgRemind"/>
    </div>
  );
}