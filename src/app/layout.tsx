import { Inter, Alumni_Sans_Pinstripe } from 'next/font/google';

import '../styles/globals.css';
import clsx from 'clsx';
import { ThemeProvider } from './context/theme-context';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const alumniSansPinstripe = Alumni_Sans_Pinstripe({
	subsets: ['latin'],
	weight: ['400'],
});

type RootLayoutProps = {
	children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pt-br">
			<body className={clsx('flex h-svh w-full antialiased', inter.className, alumniSansPinstripe.className)}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
