import clsx from 'clsx';
import { useTheme } from '../hooks/use-theme';
import Image from 'next/image';
import getImage from '@/utils/getImage';

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
				'absolute left-0 top-[3rem] z-10 flex h-[20rem] w-full flex-col overflow-auto rounded-lg font-inter text-ghostWhite shadow-[0_1.4rem_3rem_#232323] transition-all duration-300 ease-in',
				'md:text-[1.6rem]',
				{
					'bg-mediumPurple': !darkMode,
					'bg-[#903310]': darkMode,
					'invisible opacity-0': !showOptions,
					'visible opacity-100': showOptions,
				},
			)}
		>
			{currencies.map(currency => {
				const currencyCode = currency.slice(0, 2);
				return (
					<li
						key={currency}
						onClick={() => {
							onHandleClick(currency);
							setShowOptions(false);
						}}
						className={clsx('flex w-full cursor-pointer justify-around p-[.8rem]', 'gap-[1rem] md:justify-center')}
					>
						<Image src={getImage(currencyCode)} alt="" width={22} height={0} className="md:w-[32px]" />
						<span>{currency}</span>
					</li>
				);
			})}
		</ul>
	);
}
