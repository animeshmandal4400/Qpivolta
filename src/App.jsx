import { useState,useEffect } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);
  return (
    <>
    <button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-10 right-10 top-4 bg-red-600 text-lg p-1 rounded-md"
			>
				{theme === 'dark' ? '🌙' : '🌞'}
			</button>
    
    <div className=' bg-gray-100 dark:bg-bg-dark'>

    <div className="App">
      <Navbar/>
      <Home/>
    </div>
    </div>
    </>
  )
}

export default App
