import Link from 'next/link'

export default function Home() {
  return (
    <>
      <ol className="list-[upper-roman]">
        <li>
          <Link href="/foreword">Foreword</Link>
        </li>
        <li>
          <Link href="/volumes/computer-science">Computer Science</Link>
          <ol className="list-[upper-alpha]">
            <li>
              <Link href="/volumes/computer-science/binary-numerals">
                Binary Numerals
              </Link>
            </li>
            <li>
              <Link href="/volumes/computer-science/the-heap-and-the-stack">
                The Heap and the STack
              </Link>
            </li>
          </ol>
        </li>
        <li>
          <Link href="/volumes/cryptography">Cryptography</Link>
          <ol className="list-[upper-alpha]">
            <li>
              <Link href="/volumes/cryptography/salt-and-pepper">
                Salt &amp; Pepper
              </Link>
            </li>
          </ol>
        </li>
      </ol>
    </>
  )
}
