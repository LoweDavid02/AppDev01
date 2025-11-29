import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from './app/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './app/store'
import './index.css'
import './styles/theme.css'
import './styles/corner.css'

// apply the saved theme to the body so theme visually persists across routes
const _savedTheme = typeof window !== 'undefined' ? localStorage.getItem('savedTheme') || 'standard' : 'standard'
if (typeof document !== 'undefined') document.body.className = _savedTheme


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Provider store={store}>
	<ThemeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>
</Provider>
</React.StrictMode>
)