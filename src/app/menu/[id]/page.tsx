import Image from "next/image";
import React from "react";


async function getData(id:string){
    const res = await fetch(`http://localhost:3000/api/menu/${id}`);
    return res.json();
}
export default async function SingleMenu({params}:{params:{id:string}}){
    const {id} = await params

    const food = await getData(id);
    return(
        <section className="inner-page mt-5">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <Image
                            src={food.preview}
                            alt=""
                            width={500}
                            height={500}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="mt-3">{food.name}</h2>
                        <h4 className="mt-2">
                            <i>{food.ingredients}</i>
                        </h4>
                        <p className="mt-5">{food.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}