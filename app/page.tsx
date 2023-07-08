import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Hello World. Here are my changes. <Link href="/about">About</Link>
      <h1>My Blog</h1>
    </div>
  )
}
