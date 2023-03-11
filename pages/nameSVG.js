import React from "react";
import anime from "animejs";

export default function NameSVG() {
  const textRef = React.useRef(null);
  const textColor = "#b6ccd7";

  React.useEffect(() => {
    anime({
      targets: "path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
      delay: function (el, i) {
        return i * 250;
      },
      // direction: "alternate",
      // loop: true,
    });
  }, []);

  return (
    <svg viewBox="-50 0 400 15" width="1000" height="300">
      <g
        class="lines"
        fill="none"
        // fill-rule="evenodd"
        stroke={textColor}
        stroke-width="2"
      >
        <path
          d="M 24 3
            L 3 3
            L 3 20
            L 24 20
            L 24 36
            L 3 36"
        />
        <path
          d="M 48 36
            L 48 20
            L 37 3
            L 27 20
            L 27 36
            M 27 20
            L 48 20"
        />
        <path
          d="M 51 3
            L 53 36
            L 62 10
            L 70 36
            L 72 3"
        />
        {/* W */}
        <path
          d="M 75 3
            L 86 20
            L 96 3
            M 86 20
            L 86 36"
        />
        {/* Y */}
        <path
          d="M 120 3
            L 99 3
            L 99 36
            L 120 36
            M 99 20
            L 116 20"
        />
        {/* E */}
        <path
          d="M 123 20
            L 140 20
            L 140 3
            L 123 3
            L 123 36
            M 136 20
            L 142 36"
        />
        {/* R */}
        <br />
        <path
          d="M 175 3
            L 196 3
            M 188 3
            L 188 36
            L 171 36
            L 171 25"
        />
        {/* J */}
        <path
          d="M 195 3
            L 195 36
            L 216 36
            L 216 3
            L 195 3"
        />
        {/* O */}
        <path
          d="M 219 36
            L 219 3
            L 240 36
            L 240 3"
        />
        {/* N */}
        <path
          d="M 264 3
            L 243 3
            L 243 36
            L 264 36
            M 243 20
            L 260 20"
        />
        {/* E */}
        <path
          d="M 290 3
            L 267 3
            L 267 20
            L 288 20
            L 288 36
            L 267 36"
        />
        {/* S */}
      </g>
    </svg>
  );
}
