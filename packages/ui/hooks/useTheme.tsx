import { useEffect, useState } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState('dark')
  const colorTheme = theme === 'dark' ? 'light' : 'dark'
  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove(colorTheme)
    root.classList.add(theme)
  }, [theme, colorTheme])

  return [setTheme, colorTheme] as const
}

export default useTheme
