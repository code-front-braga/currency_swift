'use client';

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
import Button from './components/button';
import { MdCurrencyExchange } from 'react-icons/md';
import { ChangeEvent, useState } from 'react';

export default function HomePage() {
	const { darkMode } = useTheme();
	const [fromInput, setFromInput] = useState<string>('USD');
	const [toInput, setToInput] = useState<string>('BRL');
	const [amount, setAmount] = useState<string>('1');
	// const [debouncedAmount, setDebouncedAmount] = useState<string>('');
	const [convertedAmount, setConvertedAmount] = useState<string>('');

	const handleConvert = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Working');
	};

	const handleFromInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		const numericValue = value.replace(/\D/g, '');

		if (!numericValue) {
			setAmount('0');
			return;
		}

		setAmount((parseFloat(numericValue) / 100).toString());
	};

	return (
		<>
			<Background />
			<Main>
				<Header />
				<ThemeToggle />

				<Form handleSubmit={handleConvert}>
					<div
						className={clsx(
							'relative flex w-full items-center gap-2 rounded-[.6rem] border-b-[.3em] p-[.8rem] transition-colors duration-700',
							{
								'border-rebeccaPurple bg-lavender': !darkMode,
								'border-orangedRed bg-matteBlack': darkMode,
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
									'text-ghostWhite': darkMode,
								},
							)}
						/>
						<Input
							type="text"
							amount={amount}
							onAmountChange={handleFromInputChange}
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
								onHandleClick={setFromInput}
								selectedCurrency={fromInput}
								className={clsx('w-full cursor-pointer border-l p-[.4rem] font-inter transition-colors duration-700', {
									'text-nero': !darkMode,
									'text-ghostWhite': darkMode,
								})}
							/>
							<TiArrowSortedDown
								size={18}
								className={clsx('absolute right-[.4rem] top-1/2 -translate-y-1/2 transition-colors duration-700', {
									'text-rebeccaPurple': !darkMode,
									'text-orangedRed': darkMode,
								})}
							/>
						</div>
					</div>

					<Button type="submit" className="">
						<MdCurrencyExchange
							size={24}
							className={clsx('transition-colors duration-700', {
								'text-mediumPurple': !darkMode,
								'text-orangedRed': darkMode,
							})}
						/>
					</Button>

					<div
						className={clsx(
							'relative flex w-full items-center gap-2 rounded-[.6rem] border-b-[.3em] p-[.8rem] transition-colors duration-700',
							{
								'border-rebeccaPurple bg-lavender': !darkMode,
								'border-orangedRed bg-matteBlack': darkMode,
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
									'text-ghostWhite': darkMode,
								},
							)}
						/>
						<Input
							type="text"
							amount={convertedAmount}
							readOnly
							placeholder="0,00"
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
								onHandleClick={setToInput}
								selectedCurrency={toInput}
								className={clsx('w-full cursor-pointer border-l p-[.4rem] font-inter transition-colors duration-700', {
									'text-nero': !darkMode,
									'text-ghostWhite': darkMode,
								})}
							/>
							<TiArrowSortedDown
								size={18}
								className={clsx('absolute right-[.4rem] top-1/2 -translate-y-1/2 transition-colors duration-700', {
									'text-rebeccaPurple': !darkMode,
									'text-orangedRed': darkMode,
								})}
							/>
						</div>
					</div>
				</Form>
			</Main>

			<Footer />
		</>
	);
}
