import clsx from 'clsx';
import Background from './components/background';
import Footer from './components/footer';
import Form from './components/form';
import Header from './components/header';
import Label from './components/label';
import Main from './components/main';
import ThemeToggle from './components/theme-toggle';
import useTheme from './hooks/useTheme';
import Input from './components/input';
import CurrencySelector from './components/select-currency';
import { TiArrowSortedDown } from 'react-icons/ti';

export default function HomePage() {
	const { darkMode } = useTheme();

	return (
		<>
			<Background />
			<Main>
				<Header />
				<ThemeToggle />
			</Main>

			<Form handleSubmit={}>
				<div
					className={clsx(
						'relative flex w-full items-center gap-2 rounded-[.6rem] border-b-[.3em] p-[.8rem] transition-colors duration-700',
						{
							'border-rebeccaPurple bg-lavender': !darkMode,
							'border-orangeRed bg-matteBlack': darkMode,
						},
					)}
				>
					<Label
						htmlFor="fromInput"
						label="$"
						className={clsx(
							'absolute left-[12px] top-1/2 -translate-y-1/2 font-inter text-[1.4rem] transition-colors duration-700',
							{
								'text-nero': !darkMode,
								'text-snow': darkMode,
							},
						)}
					/>
					<Input
						type="text"
						amount={}
						onAmountChange={}
						className={clsx(
							'w-[70%] bg-transparent p-[.6rem] indent-[2rem] font-inter text-[1.4rem] outline-none transition-colors duration-700',
							{
								'text-nero': !darkMode,
								'text-ghostWhite': darkMode,
							},
						)}
					/>
					<div className="relative w-[30%]">
						<CurrencySelector
							onHandleClick={}
							selectedCurrency={}
							className={clsx('w-full cursor-pointer border-l p-[.4rem] font-inter transition-colors duration-700', {
								'text-nero': !darkMode,
								'text-ghostWhite': darkMode,
							})}
						/>
						<TiArrowSortedDown
							size={18}
							className={clsx('absolute right-[.4rem] top-1/2 -translate-y-1/2 transition-colors duration-700', {
								'text-rebeccaPurple': !darkMode,
								'text-orangeRed': darkMode,
							})}
						/>
					</div>
				</div>

				<div
					className={clsx(
						'relative flex w-full items-center gap-2 rounded-[.6rem] border-b-[.3em] p-[.8rem] transition-colors duration-700',
						{
							'border-rebeccaPurple bg-lavender': !darkMode,
							'border-orangeRed bg-matteBlack': darkMode,
						},
					)}
				>
					<Label
						htmlFor="toInput"
						label="$"
						className={clsx(
							'absolute left-[12px] top-1/2 -translate-y-1/2 font-inter text-[1.4rem] transition-colors duration-700',
							{
								'text-nero': !darkMode,
								'text-snow': darkMode,
							},
						)}
					/>
					<Input
						type="text"
						amount={}
						onAmountChange={}
						className={clsx(
							'w-[70%] bg-transparent p-[.6rem] indent-[2rem] font-inter text-[1.4rem] outline-none transition-colors duration-700',
							{
								'text-nero': !darkMode,
								'text-ghostWhite': darkMode,
							},
						)}
					/>
					<div className="relative w-[30%]">
						<CurrencySelector
							onHandleClick={}
							selectedCurrency={}
							className={clsx('w-full cursor-pointer border-l p-[.4rem] font-inter transition-colors duration-700', {
								'text-nero': !darkMode,
								'text-ghostWhite': darkMode,
							})}
						/>
						<TiArrowSortedDown
							size={18}
							className={clsx('absolute right-[.4rem] top-1/2 -translate-y-1/2 transition-colors duration-700', {
								'text-rebeccaPurple': !darkMode,
								'text-orangeRed': darkMode,
							})}
						/>
					</div>
				</div>
			</Form>
			<Footer />
		</>
	);
}
