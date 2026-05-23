import React from "react";
import {Link, NavLink} from 'react-router-dom';
import logo from "../assets/logo.png";

export default function Header(){
    return(
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="h-32 w-auto mr-4 hover:scale-105 transition-transform duration-300"
                            alt="Logo"
                        />
                    </Link>
                    <h1 className="text-4xl font-bold text-[#0B2C6B] tracking-wide">
                        BY SKYCYBER
                    </h1>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/"
                            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 shadow-lg hover:shadow-orange-400/50 hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:bg-white/20 before:rounded-xl before:blur-md"
                        >
                            Getting Started 
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}