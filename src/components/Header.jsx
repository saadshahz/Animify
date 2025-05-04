import Image from "next/image";
import React from "react";
import Logo from "../../src/assets/images/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="navbar  flex justify-between items-center p-4 bg-[#Dedede] rounded-xl">
          <div className="logo">
            <Image src={Logo} alt="LOGO" />
          </div>
          <div className="naviagtion">
            <nav>
              <ul className="flex justify-between items-center">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/hello"}>Template</Link>
                </li>
                <li>
                  <Link href={"/hello"}>Pricing</Link>
                </li>
                <li>
                  <Link href={"/hello"}>About</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="try-btn">
            <button className="p-4 rounded btn-primary-style">Try Now</button>
          </div>
        </div>
      </div>
    </header>
  );
}
