import React from "react";

export default function ProductivityIcon() {
  return (
    <svg
      width="118"
      height="99"
      viewBox="0 0 118 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_1_1317)">
        <path
          d="M51.122 38.2067H55.242V47.8067C55.242 50.0467 56.4553 50.5 57.9353 48.82L68.0287 37.3533C69.2687 35.9533 68.7487 34.7933 66.8687 34.7933H62.7487V25.1933C62.7487 22.9533 61.5353 22.5 60.0553 24.18L49.962 35.6467C48.7353 37.06 49.2553 38.2067 51.122 38.2067Z"
          stroke="white"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1_1317"
          x="0.545137"
          y="-25.5847"
          width="116.91"
          height="124.169"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1317"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="24" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_1317"
            result="effect2_dropShadow_1_1317"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1_1317"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
