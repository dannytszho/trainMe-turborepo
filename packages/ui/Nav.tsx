import Link from 'next/link'
import Button from './Button'
import ThemeButton from './ThemeButton'

const Nav = () => {
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
        <ThemeButton />
      </div>
    </header>
  )
}

export default Nav
