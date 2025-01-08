import clsx from 'clsx';
import { useTheme } from '../hooks/use-theme';

interface CurrencyOptionsProps {
	currencies: string[];
	showOptions: boolean;
	setShowOptions: (param: boolean) => void;
	onHandleClick: (currency: string) => void;
}

export default function CurrencyOptions({
	currencies,
	showOptions,
	setShowOptions,
	onHandleClick,
}: CurrencyOptionsProps) {
	const { darkMode } = useTheme();

	return (
		<ul
			className={clsx(
				'absolute left-0 top-[3rem] z-10 flex h-[20rem] w-full flex-col overflow-auto rounded-lg font-inter text-[1.3rem] text-ghostWhite shadow-[0_1.4rem_3rem_#232323] transition-all duration-300 ease-in',
				{
					'bg-mediumPurple': !darkMode,
					'bg-[#903310]': darkMode,
					'invisible opacity-0': !showOptions,
					'visible opacity-100': showOptions,
				},
			)}
		>
			{currencies.map(currency => (
				<li
					key={currency}
					onClick={() => {
						onHandleClick(currency);
						setShowOptions(false);
					}}
					className="w-full cursor-pointer p-[.8rem] text-center"
				>
					{currency}
				</li>
			))}
		</ul>
	);
}
