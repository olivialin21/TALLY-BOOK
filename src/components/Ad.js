export default function Ad() {
  let imgAry = [require('../images/ad1.png'),require('../images/ad2.png'), require('../images/ad3.png')];
  let randomNum = Math.floor(Math.random() * imgAry.length);
  let imgAd = imgAry[randomNum].default;

  const onClick=()=>{
    document.getElementById("ad").classList.add("display-none");
  }

  return(
    <div id="ad" className="ad">
      <div className="ad-img">
        <img src={imgAd} alt="ImgAd"></img>
        <div onClick={onClick} className="ad-ok">
          OK
        </div>
      </div>
    </div>
  );
}