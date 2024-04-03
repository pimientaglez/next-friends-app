import { NextResponse } from "next/server";
import {posts} from "../data";

export async function GET(_request: Request, {params}: {params: {id: string} }) {
    const post = posts.find((post) => {
        return post.id === parseInt(params.id)
    })
    
    return NextResponse.json(post);
}