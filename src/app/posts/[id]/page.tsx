import Link from 'next/link';

export default function PostId({params}: {
    params: {id: string}
}) {
    return (
      <>
        <Link href="/posts">Back to Posts</Link>
        <h1>Posts {params.id}</h1>
      </>
    )
}