import Link from 'next/link'
import Button from './Button'
import useTheme from './hooks/useTheme'

const Nav = () => {
  const [setTheme, colorTheme] = useTheme()

  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="m-4 flex items-center space-x-5">
        <Link href="/">Train Me</Link>
        <div className="item-center hidden space-x-5 md:inline-flex">
          <Link href="/about">
            <h3 className="cursor-pointer p-1">About</h3>
          </Link>
          <Link href="/aware">
            <Button description="Awareness" />
          </Link>
          <Link href="/stopwatch">
            <Button description="Stopwatch" />
          </Link>
          <Link href="/players">
            <Button description="Players" />
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <button
          className="h-6 w-6 rounded-full bg-black text-black drop-shadow-xl dark:bg-white"
          type="button"
          onClick={() => setTheme(colorTheme)}
        >
          {colorTheme === 'light' ? '' : ''}
        </button>
      </div>
    </header>
  )
}

export default Nav
