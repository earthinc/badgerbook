import Link from 'next/link'

export default function Home() {
  return (
    <>
      <p>Please note. This is a work in progress.</p>
      <h1>Book</h1>
      <h2>Table of Contents</h2>
      <ol>
        <li>
          <Link href="/computer-science">Computer Science</Link>
        </li>
      </ol>
    </>
  )
}
