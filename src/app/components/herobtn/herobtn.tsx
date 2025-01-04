import React from "react";
import './herobtn.css';

export default function HeroBtn({name, target}:{name:string, target:string}){
    const handleScrollTo=(section:string)=>{
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return(
        <a onClick={()=> handleScrollTo(target)}
        className={`btn-hero animated fadeInUp scrollto${
            name.includes('book')?'ms-4':undefined
        }`}
        >{name}</a>
    )
}