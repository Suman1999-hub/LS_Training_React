import React, { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";

function ConfettiCom() {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  const config = {
    angle: 150,
    spread: 360,
    startVelocity: 40,
    elementCount: 180,
    dragFriction: 0.12,
    duration: 4000,
    stagger: 3,
    width: "8px",
    height: "7px",
    perspective: "500px",
    colors: ["#f00", "#0f0", "#00f"],
  };

  useEffect(() => {
    setIsConfettiVisible(true);
    setTimeout(() => setIsConfettiVisible(false), config.duration);
  }, []);

  return (
    <div>
      <Confetti active={isConfettiVisible} config={config} />
    </div>
  );
}

export default ConfettiCom;
