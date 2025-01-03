"use client";
import React, { useEffect, useState } from "react";
import "./header.css";
import AppButt from "../appButt/appButt";
import Nav from "../nav/nav";

export default function Header() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', ()=>{
                setScroll(window.scrollY);
            });
        };
    },[scroll]);

    return (
        <header 
        id="header"
        className={`fixed-top d-flex align-items-center ${
            scroll>100 ? 'header-scrolled' : undefined
        }`}
        >
          <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
            <h1 className="logo me-auto me-lg-0">
                <a href="/">Resto</a>
            </h1>
            <Nav />
            <AppButt name="Book a Table" />
          </div>
        </header>
    )
}