import { Inter, Alumni_Sans_Pinstripe } from 'next/font/google';

import '../styles/globals.css';
import clsx from 'clsx';

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
			<body className={clsx('antialiased', inter.className, alumniSansPinstripe.className)}>{children}</body>
		</html>
	);
}
