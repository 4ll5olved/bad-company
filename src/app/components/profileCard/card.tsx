import React from "react";
import './card.css';

export default function Card({item}:{item:{id:number;title:string;content:string}}){
    return(
        <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="200">
                <span>0{item.id}</span> 
                <h4>{item.title}</h4> 
                <p>{item.content}</p>
            </div>
        </div>
    )
}