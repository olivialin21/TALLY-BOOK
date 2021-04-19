import LottieAnimation from './Lottie';
import ball from '../json/ball.json';

export default function Loading() {

  return (
    <div id="loading-page" className="loading-page display-none">
      <div className="loading-animation">
        <LottieAnimation lotti={ball}/>
      </div>
    </div>
  );
};