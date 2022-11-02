import Link from 'next/link'

export default function Home() {
  return (
    <>
      <ol className="list-[upper-roman]">
        <li>
          <Link href="/foreword">Foreword</Link>
        </li>
        <li>
          <Link href="/volumes/computer-science">Computer science</Link>
          <ol className="list-[upper-alpha]">
            <li>
              <Link href="/volumes/computer-science/binary-numerals">
                Binary numerals
              </Link>
            </li>
          </ol>
        </li>
      </ol>
    </>
  )
}
