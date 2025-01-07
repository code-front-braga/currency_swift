import clsx from 'clsx';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import useTheme from '../hooks/useTheme';

export default function Header() {
	const { darkMode } = useTheme();

	return (
		<header className="fixed top-[8rem] w-full">
			<div className="flex items-center justify-center">
				<CgArrowsExchangeAltV
					size={36}
					className={clsx({ 'text-rebeccaPurple': !darkMode, 'text-orangedRed': darkMode })}
				/>
				<h1
					className={clsx('font-alumniSansPinstripe text-[3rem] font-semibold', {
						'text-matteBlack': !darkMode,
						'dark:from-orangeRed dark:to-orangeRed bg-gradient-to-r text-transparent dark:via-gold dark:bg-clip-text':
							darkMode,
					})}
				>
					Currency{' '}
					<span
						className={clsx('font-inter', {
							'text-rebeccaPurple': !darkMode,
							'text-orangedRed': darkMode,
						})}
					>
						$
					</span>
					wift
				</h1>
			</div>
		</header>
	);
}
