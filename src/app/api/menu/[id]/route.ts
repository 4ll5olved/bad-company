import { menu } from "@/app/data/data"; // Adjust the import path as necessary
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> } // Change the type to a Promise
) {
    // Await the params to access its properties
    const { id } = await params;

    // Find the food item by id
    const food = menu.find((item) => item.id.toString() === id);

    // If the food item is not found, return a 404 response
    if (!food) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Return the found food item
    return NextResponse.json(food);
}