"use client"
import {useState, useEffect} from "react";
import Link from 'next/link';

export type Post = {
  id: string;
  content: string;
  timestamp: string,
  likes: number,
};

export default function PostID({params}: {params: {id: string}}) {
    const [post, setPost] = useState<Post | null>(null); 
    const getPost = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/posts/${params.id}`, {method: 'GET'});
            if(response) {
                const result = await response.json();
                if(result) setPost(result);
            }
        } catch(e) {
            console.error('Error => ',e);
        }
    }

    useEffect(() => {
      getPost();
    }, [])
    
    
    return (
        <main>
            {post && 
                <>
                    <h2>{post?.content}</h2>
                    <h2>{post?.timestamp}</h2>
                    <h2>{post?.likes}</h2>
                </>
            }
            <Link href="/posts" className="text-blue-500 mr-4"><h3>Go Back</h3></Link>
        </main>
    )
}