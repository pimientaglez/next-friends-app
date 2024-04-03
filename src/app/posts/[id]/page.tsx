import Link from 'next/link';

export default function PostId({params}: {
    params: {id: string}
}) {
    return (
      <>
        <Link href="/posts"><h3>Back to Posts</h3></Link>
        <h1>Posts {params.id}</h1>
      </>
    )
}