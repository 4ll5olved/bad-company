import React from "react";
import './appButt.css';

export default function AppButt({name}:{name:string}) {
    const handleScrollto = (section:string) => {
        //to the table!
        
    }

    return (
        <a  
        className="app-btn scrollto d-none d-lg-flex"
        onClick={()=> handleScrollto("book-a-table")}
        >
         {name}   
        </a>
    );
}