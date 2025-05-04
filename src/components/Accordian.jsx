"use client";
import React, { useState } from "react";

export default function Accordian(props) {
  const { items } = { ...props };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span className="accordion-question">{item.question}</span>
            <span className="accordion-icon">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
