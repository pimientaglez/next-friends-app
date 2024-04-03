import Link from 'next/link';

export default function Home() {
  return (
    <main>
      Main Page
      <h2><Link href="/profile">Profile</Link></h2>
      <h2><Link href="/posts">Posts</Link></h2>
    </main>
  );
}
