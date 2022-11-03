import { PropsWithChildren } from 'react'

type LayoutProps = PropsWithChildren

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="h-16 sticky top-0 bg-white/25 backdrop-blur flex items-center shadow z-20">
        <div className="ml-8">
          <span className="uppercase font-semibold text-xl dark:text-white">
            Book
          </span>
        </div>
      </header>
      <main className="p-8 z-10">
        <div className="prose prose-slate dark:prose-invert">{children}</div>
      </main>
      <footer className="p-8 text-sm dark:text-slate-400">
        &copy; 2022 Rare Earth Labs
      </footer>
    </>
  )
}
