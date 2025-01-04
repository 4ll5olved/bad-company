import { menu } from "@/app/data/data";

export async function GET() {
    return Response.json(menu);
}