import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="p-16">
        <div className="prose prose-slate dark:prose-invert">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
