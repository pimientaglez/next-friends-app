import Link from 'next/link';

const navLinks = [
  {name: "Profile", href: "/profile"},
  {name: "Posts", href: "/posts"},
];

export default function Home() {
  return (
    <main>
      <h1>
        Main Page
      </h1>
    </main>
  );
}
