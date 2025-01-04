import React from "react";
import './about.css';
import abtImg from '../../../../public/about2.jpg';
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div
                    className="col-lg-6 order-1 order-lg-2"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    >
                        <div className="about-img">
                            <Image src={abtImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem id, </h3>
                        <p>officia aspernatur ducimus impedit natus nostrum mollitia laboriosam est dolores molestias sed.</p>
                        <ul>
                            <li>magnam, beatae distinctio</li>
                            <li>quod doloremque repudiandae</li>
                            <li>consequuntur libero</li>
                        </ul>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, labore asperiores, error fugit nobis deserunt quis vitae voluptates odit hic maiores? Fuga dicta quia possimus aut ad animi, deserunt voluptates!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}