import clsx from 'clsx';
import { useTheme } from '../hooks/use-theme';

interface FormProps {
	handleSubmit: (e: React.FormEvent) => void;
	children: React.ReactNode;
}

export default function Form({ handleSubmit, children }: FormProps) {
	const { darkMode } = useTheme();

	return (
		<form
			onSubmit={handleSubmit}
			className={clsx(
				'flex w-full flex-col items-center gap-[3rem] rounded-[1.2rem] p-4 transition-colors duration-700',
				'xl:gap-[6rem]',

				{
					'bg-ghostWhite lg:bg-matteBlack': !darkMode,
					'bg-nero': darkMode,
				},
			)}
		>
			{children}
		</form>
	);
}
