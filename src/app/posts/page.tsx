"use client"
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export type Post = {
  id: string;
  content: string;
  timestamp: string,
  likes: number,
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
    const handleClick = (id: string) => {
        router.push(`posts/${id}`);
    }
    
    
    return (
        <main>
            {(posts && posts.length > 0) && (
                posts.map((post) => {
                    return (
                        <div key={post?.id} onClick={()=>{handleClick(post.id)}}>
                            <h2>{post?.content}</h2>
                            <h2>{post?.timestamp}</h2>
                            <h2>{post?.likes}</h2>
                        </div> 
                    )
                })
            )
            }
            <Link href="/" className="text-blue-500 mr-4"><h3>Go Back</h3></Link>
        </main>
    )
}