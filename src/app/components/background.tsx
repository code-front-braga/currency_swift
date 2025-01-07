import clsx from 'clsx';
import useTheme from '../hooks/useTheme';

export default function Background() {
	const { darkMode } = useTheme();

	return (
		<>
			<div
				className="absolute inset-0 z-0 bg-repeat"
				style={{ backgroundImage: 'url(/glitch-effect.png)', backgroundSize: '120px' }}
			/>
			<div
				className={clsx('absolute inset-0 bg-opacity-80 transition-colors duration-700', {
					'bg-ghostWhite': !darkMode,
					'bg-matteBlack': darkMode,
				})}
			/>
		</>
	);
}
