import clsx from 'clsx';
import useTheme from '../hooks/useTheme';

interface FormProps {
	handleSubmit: VoidFunction;
	children: React.ReactNode;
}

export default function Form({ handleSubmit, children }: FormProps) {
	const { darkMode } = useTheme();

	return (
		<form
			onSubmit={handleSubmit}
			className={clsx('flex w-full flex-col items-center gap-[3rem] rounded-lg p-4 transition-colors duration-700', {
				'bg-ghostWhite': !darkMode,
				'bg-nero': darkMode,
			})}
		>
			{children}
		</form>
	);
}
