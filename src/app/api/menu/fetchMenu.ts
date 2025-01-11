import { MenuItemType } from "@/app/types/menuItem";

const JSONBIN_ID = process.env.JSONBIN_ID;
const API_KEY = process.env.API_KEY;

export async function fetchMenuData():Promise<MenuItemType[]> {
    const headers = new Headers({
        "content-type": "application/json",
    });

    if (API_KEY) {
        headers.set("X-Master-Key", API_KEY);
    }

    const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}`,{
        headers,
    });

    if (!response.ok) {
        throw new Error("Failed to fetch menu data");
    }

    const result = await response.json();
    return result
}