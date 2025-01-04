import { menu } from "@/app/data/data";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    {params}: {params: {id: string}}
) {
    const {id} = await params;
    const item = menu.find((menuItem) => menuItem.id === parseInt(id));
    if (!item) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
      }

    return NextResponse.json(menu);
}