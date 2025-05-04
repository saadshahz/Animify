import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../src/assets/images/Logo_full.png";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="flex justify-between items-start">
          <div className="desc w-2/5">
            <Image src={Logo} alt="Logo" />

            <p>
              1234 Innovation Blvd, Suite 567 Tech City, TC 98765, United
              States.
            </p>
            <ul>
              <li>
                <Link href={"tel:(555) 123-4567"}>(555) 123-4567</Link>
              </li>{" "}
              <li>
                <Link href={"mailto:contact@animify.com"}>
                  contact@animify.com
                </Link>
              </li>
            </ul>
          </div>

          <div className=" w-1/5 foo-menu">
            <h3>Menu</h3>
            <ul>
              <li>
                <Link href={"#"}>Home</Link>
              </li>
              <li>
                <Link href={"#"}>About</Link>
              </li>
              <li>
                <Link href={"#"}>Blog</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className=" w-1/5 foo-menu">
            <h3>Other Pages</h3>
            <ul>
              <li>
                <Link href={"#"}>Log In</Link>
              </li>
              <li>
                <Link href={"#"}>Forgot Password</Link>
              </li>
              <li>
                <Link href={"#"}>Terms & Services</Link>
              </li>
              <li>
                <Link href={"#"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className=" w-1/4 foo-menu">
            <h3>My Work</h3>
            <ul>
              <li>
                <Link href={"#"}>Dribbble</Link>
              </li>
              <li>
                <Link href={"#"}>Upwork</Link>
              </li>
              <li>
                <Link href={"#"}>Awwwwards</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
