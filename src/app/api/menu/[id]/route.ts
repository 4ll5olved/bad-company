import { menu } from "@/app/data/data"; // Adjust the import path as necessary
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    // Find the food item by id
    const food = menu.find((item) => item.id.toString() === params.id);

    // If the food item is not found, return a 404 response
    if (!food) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Return the found food item
    return NextResponse.json(food);
}