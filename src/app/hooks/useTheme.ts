'use client';

import { useEffect, useState } from 'react';

export default function useTheme() {
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

	useEffect(() => {
		if (darkMode) {
			localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		} else {
			localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	return { darkMode, setDarkMode };
}
