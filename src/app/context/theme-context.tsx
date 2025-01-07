'use client';

import { createContext, useEffect, useState } from 'react';

export interface ThemeContextProps {
	darkMode: boolean;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [darkMode, setDarkMode] = useState<boolean>(false);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setDarkMode(true);
			document.documentElement.classList.add('dark');
		} else {
			setDarkMode(false);
			document.documentElement.classList.remove('dark');
		}
	}, []);

	const toggleTheme = () => {
		setDarkMode(prev => !prev);
		const newTheme = !darkMode ? 'dark' : 'light';
		localStorage.setItem('theme', newTheme);
		document.documentElement.classList.toggle('dark', !darkMode);
	};

	return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}


