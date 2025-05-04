import Image from "next/image";
import React from "react";

export default function CustomerCard() {
  return (
    <div className="customer-card">
      <div className="testimonial-card">
        <div className="testimonial-content">
          <div className="testimonial-header">
            <div className="avatar-placeholder">JM</div>
            <div className="testimonial-author">John M.</div>
          </div>
          <div className="testimonial-text">
            <p>This tool has completely transformed the way we work! It's</p>
            <p>intuitive, fast, and so easy to integrate with our current</p>
            <p>processes. Highly recommended</p>
          </div>
        </div>
      </div>
    </div>
  );
}
