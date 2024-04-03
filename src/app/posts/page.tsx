import Link from 'next/link';

export default function Posts() {
    return (
        <>
            <Link href="/"><h3>Home</h3></Link>
            <h1>Posts</h1>
            <Link href={`/posts/${1}`}>Show Post Detail 1</Link>
        </>
    )
  }