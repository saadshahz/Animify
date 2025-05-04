import Image from "next/image";
import React from "react";
import main from "../../src/assets/images/main.png";
import leftSidebar from "../../src/assets/images/leftsidebar.png";
import rightSidebar from "../../src/assets/images/rightsidebar.png";

export default function PojectPreview() {
  return (
    <div className="PojectPreview bg-white">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="w-1/4">
            <Image src={leftSidebar} />
          </div>
          <div className="w-2/4">
            <Image src={main} />
          </div>
          <div className="w-1/4">
            <Image src={rightSidebar} />
          </div>
        </div>
      </div>
    </div>
  );
}
