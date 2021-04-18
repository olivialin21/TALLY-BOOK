import LottieAnimation from '../components/Lottie';
import sleep from '../json/404.json';

export default function Setting() {

  return (
    <div className="setting-page">
      <div className="setting-animation">
        <LottieAnimation lotti={sleep}/>
      </div>
    </div>
  );
};