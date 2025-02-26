"use client";
import React, { useEffect, useState } from "react";
import './hero.css';
import GLightbox from "glightbox";
import HeroBtn from "@/app/components/herobtn/herobtn";


export default function Hero() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    useEffect(() => {
        if (isClient) {
            // Initialize GLightbox when the component mounts (client-side only)
            const lightbox = GLightbox({
                selector: '.glightbox',
            });
            
            // Cleanup function to destroy lightbox when the component unmounts
            return () => {
                lightbox.destroy();
            };
        }
    }, [isClient]);

    return (
        <section
        id="hero" className="d-flex align-items-center">
            <div className="container position-relative text-center text-lg-start"
            data-aos="zoom-in"
            data-aos-delay="100">
            <div className="row">
                <div className="col-lg-8">
                    <h1>Welcome to <span>Resto</span></h1>
                    <h2>Circa 1978</h2>

                    <div className="btns">
                        <HeroBtn name="our menu" target="menu"  />
                        <HeroBtn name="book a table" target="book-a-table" />
                    </div>
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                data-aos="zoom-in"
                data-aos-delay="200">
                    <a href="https://www.youtube.com/watch?v=9cPxh2DikIA"
                    className="glightbox play-btn"></a>
                </div>
            </div>
        </div>

        </section>
    )
}