import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation({ lotti }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti
  };

  return (
    <div>
      <Lottie options={defaultOptions}/>
    </div>
  );
};