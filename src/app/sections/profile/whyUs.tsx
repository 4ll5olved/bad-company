import React from "react";
import './whyUs.css';
import Card from "@/app/components/profileCard/card";
import SectionTitle from "@/app/components/sectTitle/sectionTitle";

async function getData() {
    const res = await fetch('http://localhost:3000/api/profile');
    return res.json();
}

export default async function WhyUs() {
    const items:[] = await getData();
    return(
        <section className="why-us" id="why-us">
            <div className="container">
                <SectionTitle title="Why Us" subtitle="Why Choose Us" />
                <div className="row">
                    {items && items.length > 0 && items.map(
                        (item:{id:number;title:string;content:string}) => (
                            <Card key={item.id} item={item} />
                        )
                    )}
                </div>
            </div>
        </section>
    )
}