import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../context/theme-context";

export function useTheme(): ThemeContextProps {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context as ThemeContextProps;
}