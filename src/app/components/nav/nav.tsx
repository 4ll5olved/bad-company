"use client"
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import './nav.css';
import { navs } from "@/app/data/data";

export default function Nav() {
    const pathname = usePathname();
    const Router = useRouter();
    const [navlist, setNavlist] = useState(navs);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);
    
    const handleToogleMenu = () => {
        setOpen(!open)
    }

    const handleScrollTo = (section : string) => {
        const header:HTMLElement = document.querySelector('#header')!;
        const offset = header.offsetHeight;
        const targetEl:HTMLElement= document.querySelector('#'+section)!;
        if(pathname === '/'){
            const elementPosition = targetEl.offsetTop;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        } else {
            Router.push(`/#${section}`);
        }
    }

    const handleNavActive = ()=>{
        const position = scroll + 200;
        setNavlist(
            navlist.map(nav=>{
                nav.active = false;
                const targetsection:HTMLElement = document.querySelector(
                    '#'+ nav.target
                )!;

                if(
                    targetsection &&
                    position>=targetsection.offsetTop &&
                    position<=targetsection.offsetTop + targetsection.offsetHeight    
                ) {
                   nav.active = true 
                }
                return nav;
            })
       )
    }

    useEffect(() => {
        handleNavActive();
    }, [scroll]);
        


    return (
        <nav id="navbar"
        className={`navbar order-last order-lg-0 ${
            open ? 'navbar-mobile': undefined
        }`}
        >
          <ul>
            {navlist.map(nav=>(
                <li key={nav.id}>
                    <a className={`nav-link scrollto ${
                        nav.active ? 'active' : undefined
                    }`}
                    onClick={()=> handleScrollTo(nav.target)}
                    >
                        {nav.name === 'Home' ? (
                            <i className="bi bi-house-door-fill"></i>
                        ) : (
                            nav.name
                        )}
                    </a>
                </li>
            ))}
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={handleToogleMenu}></i>
        </nav>
    )
}