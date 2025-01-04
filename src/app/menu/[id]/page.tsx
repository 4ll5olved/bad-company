import Image from "next/image";
import React from "react";

async function getData(id: string) {
    const res = await fetch(`/api/menu/${id}`);
    
    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function SingleMenu({ params }: { params: Promise<{ id: string }> }) {
    // Await the params to access its properties
    const { id } = await params;

    // Fetch the food data
    const food = await getData(id);

    return (
        <section className="inner-page mt-5">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <Image
                            src={food.preview}
                            alt={food.name} // Provide a meaningful alt text
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
    );
}