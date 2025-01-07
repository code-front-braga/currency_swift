import clsx from 'clsx';
import { useTheme } from '../hooks/use-theme';

interface CurrencyOptionsProps {
	currencies: string[];
}

export default function CurrencyOptions({ currencies }: CurrencyOptionsProps) {
	const { darkMode } = useTheme();

	return (
		<ul
			className={clsx(
				'text-snow absolute left-0 top-[3rem] z-10 flex h-[20rem] w-full flex-col overflow-auto rounded-lg font-inter text-[1.3rem] shadow-lg',
				{
					'bg-mediumPurple': !darkMode,
					'bg-[#903310]': darkMode,
				},
			)}
		>
			{currencies.map(currency => (
				<li key={currency} className="w-full cursor-pointer p-[.8rem] text-center">
					{currency}
				</li>
			))}
		</ul>
	);
}
