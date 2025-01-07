import clsx from 'clsx';
import { useTheme } from '../hooks/use-theme';

export default function Footer() {
	const { darkMode } = useTheme();
	return (
		<footer
			className={clsx('fixed bottom-0 w-full rounded-t-[3rem] p-[1.2rem]', {
				'bg-matteBlack': !darkMode,
				'bg-ghostWhite': darkMode,
			})}
		>
			<p
				className={clsx('text-center font-inter text-[1.2rem]', {
					'text-nero': !darkMode,
					'text-ghostWhite': darkMode,
				})}
			>
				&copy; {new Date().getFullYear()} Currency Swift. Created by Leonardo Braga.
			</p>
		</footer>
	);
}
