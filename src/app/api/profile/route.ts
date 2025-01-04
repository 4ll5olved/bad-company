import { profile } from "@/app/data/data";

export async function GET() {
    return Response.json(profile);
}   