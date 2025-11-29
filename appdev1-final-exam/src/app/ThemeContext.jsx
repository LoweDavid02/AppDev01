import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('savedTheme') || 'standard'
    } catch (e){
      return 'standard'
    }
  })

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.className = theme
    }
    try { localStorage.setItem('savedTheme', theme) } catch (e) {}
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  const ctx = useContext(ThemeContext)
  if(!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

export default ThemeContext
