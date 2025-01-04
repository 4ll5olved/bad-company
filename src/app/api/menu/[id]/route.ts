import { menu } from "@/app/data/data";
import { NextResponse } from 'next/server';

export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
) {
    const food = menu.find((item: { id: number }) => item.id.toString() === params.id);
    return NextResponse.json(food);
}