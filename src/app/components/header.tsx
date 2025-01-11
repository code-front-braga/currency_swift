import clsx from 'clsx';
import { CgArrowsExchangeAltV } from 'react-icons/cg';
import { useTheme } from '../hooks/use-theme';

export default function Header() {
	const { darkMode } = useTheme();

	return (
		<header className={clsx('fixed flex w-full flex-col p-[2rem]', '')}>
			<div className="flex items-center justify-center">
				<CgArrowsExchangeAltV
					size={36}
					className={clsx({ 'text-rebeccaPurple': !darkMode, 'text-orangedRed': darkMode })}
				/>
				<h1
					className={clsx('font-alumniSansPinstripe text-[3rem] font-semibold', 'md:text-[4rem]', 'lg:text-[3rem]', {
						'text-matteBlack': !darkMode,
						'bg-gradient-to-r from-orangedRed via-gold to-orangedRed bg-clip-text text-transparent': darkMode,
					})}
				>
					Currency{' '}
					<span
						className={clsx('font-inter font-normal', {
							'text-rebeccaPurple': !darkMode,
							'text-orangedRed': darkMode,
						})}
					>
						$
					</span>
					wift
				</h1>
			</div>
			<div className="text-center">
				<span
					className={clsx('font-inter text-[1.2rem] text-ghostWhite', 'md:text-[1.6rem]', 'lg:text-[1.4rem]', {
						'text-nero': !darkMode,
						'text-ghostWhite': darkMode,
					})}
				>
					{new Date().toLocaleDateString('pt-BR', {
						dateStyle: 'full',
					})}
				</span>
			</div>
		</header>
	);
}
