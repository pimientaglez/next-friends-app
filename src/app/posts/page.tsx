"use client"
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import type {User} from "../profile/page";

export type Post = {
  id: string;
  content: string;
  timestamp: string;
  likes: number;
  user: User;
};

export default function Posts({params}: {params: {id: string}}) {
    const [posts, setPosts] = useState<Post[] | null>(null); 
    const getPost = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/posts/`, {method: 'GET'});
            if(response) {
                const result = await response.json();
                if(result) setPosts(result);
            }
        } catch(e) {
            console.error('Error => ',e);
        }
    }

    useEffect(() => {
      getPost();
    }, [])

    const router = useRouter();    
    
    return (
        <main>
            {(posts && posts.length > 0) && (
                posts.map((post) => {
                    return (
                        <div key={post?.id} className="mb-2 mt-2">
                            <h3 className="font-bold mr-4">{`${post?.user?.first_name} ${post?.user?.last_name}`}</h3>
                            <h2>{post?.content}</h2>
                            <h2>{post?.timestamp}</h2>
                            <h2>{post?.likes}</h2>
                            <Link href={`posts/${post?.id}`}>
                                <span className="text-blue-500">See Detail</span>
                            </Link>
                        </div> 
                    )
                })
            )
            }
            <Link href="/" className="text-blue-500 mr-4"><h3>Go Back</h3></Link>
        </main>
    )
}