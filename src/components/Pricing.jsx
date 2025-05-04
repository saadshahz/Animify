import React from "react";

export default function Pricing(props) {
  const { price, title, type } = { ...props };
  return (
    <div className="explore-card ">
      <h3>{title}</h3>
      <div className="pricing">
        <p>{type ? <span>{type}</span> : <span>$ {price}</span> / "monthly"}</p>
      </div>
      <p>Perfect for custom animation and motion graphics.</p>
      <button>Sign Up with Enterprise</button>
      <ul>
        <li>Unlimited files</li>
        <li>Unlimited editors</li>
        <li>Export video, GIF, Lottie</li>
        <li>720p, 30fps</li>
        <li>Import from Figma</li>
      </ul>
    </div>
  );
}
