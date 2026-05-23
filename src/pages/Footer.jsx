import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(135deg,#fff8f0,#ffffff,#ffe2bf)] border-t border-[#ffd1a1]">
      
      <div className="mx-auto w-full max-w-screen-xl px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* LEFT */}
          <div>
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="h-28 w-auto hover:scale-105 transition-all duration-300"
                alt="Logo"
              />
            </Link>

            <p className="mt-4 max-w-sm text-[#7a5a37] leading-relaxed">
              Hyperlocal digital execution marketplace connecting businesses
              with skilled students.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">

            <div>
              <h2 className="mb-4 text-sm font-extrabold uppercase text-[#241200]">
                Resources
              </h2>

              <ul className="space-y-3 text-[#7a5a37] font-medium">
                <li>
                  <Link to="/" className="hover:text-[#ff8a00]">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-[#ff8a00]">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-extrabold uppercase text-[#241200]">
                Follow Us
              </h2>

              <ul className="space-y-3 text-[#7a5a37] font-medium">
                <li>
                  <a href="/" className="hover:text-[#ff8a00]">
                    Instagram
                  </a>
                </li>

                <li>
                  <a href="/" className="hover:text-[#ff8a00]">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-extrabold uppercase text-[#241200]">
                Legal
              </h2>

              <ul className="space-y-3 text-[#7a5a37] font-medium">
                <li>
                  <Link to="/" className="hover:text-[#ff8a00]">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link to="/" className="hover:text-[#ff8a00]">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#ffd1a1]" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <span className="text-sm text-[#7a5a37]">
            © 2026 I-COCKROACH. All Rights Reserved.
          </span>

          <div className="flex items-center gap-5 text-[#7a5a37]">
            
            <a href="/" className="hover:text-[#ff8a00] transition-all">
              Facebook
            </a>

            <a href="/" className="hover:text-[#ff8a00] transition-all">
              Discord
            </a>

            <a href="/" className="hover:text-[#ff8a00] transition-all">
              Twitter
            </a>

            <a href="/" className="hover:text-[#ff8a00] transition-all">
              GitHub
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}