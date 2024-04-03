import { NextResponse } from "next/server";
import {posts} from "./data";

export async function GET(_request: Request) {
    return NextResponse.json(posts);
}