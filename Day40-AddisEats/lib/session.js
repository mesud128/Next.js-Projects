import { cookies } from "next/headers";
export async function getSessionUser(){const jar=await cookies();const id=jar.get("demo-user-id")?.value;return id?{id}:null;}
