import { fetchMenuData } from "./fetchMenu";
import { NextResponse } from "next/server";

export async function get() {
    try {
        const menu = await fetchMenuData();
        return NextResponse.json(menu);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}