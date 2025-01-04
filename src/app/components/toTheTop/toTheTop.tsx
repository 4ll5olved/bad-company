"use client";
import React, { useEffect, useState } from "react";
import './toTheTop.css';

export default function ToTheTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return ()=>{
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            })
        }
    },[scroll])

    const toTheTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <a onClick={toTheTop} className={`back-to-top d-flex align-items-center justify-content-center ${
            scroll > 100 ? 'active' : undefined
        }`}
        >
            <i className="bi bi-arrow-up-short"></i>
        </a>
    );
}