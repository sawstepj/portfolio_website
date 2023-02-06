import React from "react";
import anime from "animejs";

export default function NameSVG() {
  const textRef = React.useRef(null);

  React.useEffect(() => {
    anime({
      targets: textRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    // create svg that is compatible with anime.js and writes the letter S
    <svg width="100" height="100">
      <path d="M 10 50 
                L 20 50 
                L 10 70 
                Q 15 60, 20 70 Z" fill="#000"/>
    </svg>
  );
}
