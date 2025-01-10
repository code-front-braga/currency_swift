'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme } from './hooks/use-theme';
import { TiArrowSortedDown } from 'react-icons/ti';
import { MdCurrencyExchange } from 'react-icons/md';
import { fetchAvailableCurrencies } from '@/server/actions/fetchAvailableCurrencies';
import { motion } from 'motion/react';
import { FaInfoCircle } from 'react-icons/fa';

// Components:
import formatCurrency from '@/utils/formatCurrency';
import Background from './components/background';
import Main from './components/main';
import Header from './components/header';
import ThemeToggle from './components/theme-toggle';
import Form from './components/form';
import Label from './components/label';
import Input from './components/input';
import CurrencySelector from './components/select-currency';
import CurrencyOptions from './components/options-currency';
import Button from './components/button';
import Footer from './components/footer';
import Info from './components/info';
import { fetchExchangeRates } from '@/server/actions/fetchExchangeRates';

export default function HomePage() {
	const { darkMode } = useTheme();
	const [currencies, setCurrencies] = useState<string[]>([]);
	const [fromInput, setFromInput] = useState<string>('USD');
	const [toInput, setToInput] = useState<string>('BRL');
	const [amount, setAmount] = useState<string>('1');
	const [debouncedAmount, setDebouncedAmount] = useState<string>('');
	const [convertedAmount, setConvertedAmount] = useState<string>('');
	const [showFromOptions, setShowFromOptions] = useState<boolean>(false);
	const [showToOptions, setShowToOptions] = useState<boolean>(false);
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

	const handleFromInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const numericValue = value.replace(/\D/g, '');
		if (!numericValue) {
			setAmount('0');
			return;
		}
		setAmount((parseFloat(numericValue) / 100).toString());
	};

	const handleConvertCurrency = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!debouncedAmount || isNaN(parseFloat(debouncedAmount))) {
			return;
		}

		if (fromInput === toInput) {
			setConvertedAmount(parseFloat(debouncedAmount).toString());
			return;
		}

		try {
			const data = await fetchExchangeRates({ fromCurrency: fromInput, toCurrency: toInput });
			if (!data || !data.bid) {
				setToInput(fromInput);
				setConvertedAmount(parseFloat(debouncedAmount).toString());
				return;
			}

			const rate = parseFloat(data.bid);
			const result = (parseFloat(amount) * rate).toString();

			setConvertedAmount(result);
		} catch (error) {
			console.error('Error caught in handleConvertCurrency:', error);
			alert((error as Error).message);
			setToInput(fromInput);
			setConvertedAmount(parseFloat(debouncedAmount).toString());
		}
	};

	const handleClick = () => {
		setIsClicked(true);
		setTimeout(() => setIsClicked(false), 1000);
	};

	useEffect(() => {
		const debounceTimer = setTimeout(() => setDebouncedAmount(amount), 300);
		return () => clearTimeout(debounceTimer);
	}, [amount]);

	useEffect(() => {
		fetchAvailableCurrencies().then(setCurrencies);
	}, []);

	return (
		<>
			<Background />
			<Main>
				<Header />

				<div className="flex w-full items-center justify-between">
					<ThemeToggle />
					<Button onClick={() => setIsInfoOpen(!isInfoOpen)}>
						<FaInfoCircle
							size={26}
							className={clsx(
								darkMode
									? isInfoOpen
										? 'text-lime'
										: 'text-orangedRed'
									: isInfoOpen
										? 'text-orangedRed'
										: 'text-rebeccaPurple',
							)}
						/>
					</Button>
				</div>
				<Info isInfoOpen={isInfoOpen} />

				<Form handleSubmit={handleConvertCurrency}>
					<div
						className={clsx(
							'relative flex w-full items-center gap-2 rounded-[.6rem] border-b-[.3em] p-[.8rem] transition-colors duration-700',
							darkMode
								? showFromOptions
									? 'border-lime bg-matteBlack' // Quando em dark mode e aberFrom
									: 'border-orangedRed bg-matteBlack' // Quando em dark mode e fechado
								: showFromOptions
									? 'border-orangedRed bg-lavender' // Quando em light mode e aberto
									: 'border-rebeccaPurple bg-lavender', // Quando em light mode e fechado
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
							amount={amount ? formatCurrency(parseFloat(amount)) : ''}
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
								onHandleClick={() => setShowFromOptions(!showFromOptions)}
								selectedCurrency={fromInput}
								className={clsx(
									'relative flex w-full cursor-pointer items-center gap-[.6rem] border-l p-[.4rem] font-inter transition-colors duration-700',
									{
										'border-l-nero text-nero': !darkMode,
										'border-l-ghostWhite text-ghostWhite': darkMode,
									},
								)}
							/>
							<TiArrowSortedDown
								size={18}
								className={clsx(
									'absolute right-[.4rem] top-1/2 -translate-y-1/2 transition-colors duration-700',
									// darkMode ? 'text-orangedRed' : showFromOptions ? 'text-rebeccaPurple' : 'text-lime',
									darkMode
										? showFromOptions
											? 'text-lime' // Quando em dark mode e aberto
											: 'text-orangedRed' // Quando em dark mode e fechado
										: showFromOptions
											? 'text-orangedRed' // Quando em light mode e aberto
											: 'text-rebeccaPurple', // Quando em light mode e fechado

									// Animação de rotação da seta
									showFromOptions
										? '-rotate-180 transition-transform duration-300 ease-in'
										: 'rotate-0 transition-transform duration-300 ease-in',
								)}
							/>
							<CurrencyOptions
								setShowOptions={setShowFromOptions}
								currencies={currencies}
								onHandleClick={setFromInput}
								showOptions={showFromOptions}
							/>
						</div>
					</div>

					<Button type="submit" onClick={handleClick} className="">
						<motion.div
							animate={isClicked ? { rotate: [0, 360, 0] } : { rotate: 0 }}
							transition={{ duration: 1, ease: 'easeInOut' }}
						>
							<MdCurrencyExchange
								size={30}
								className={clsx('transition-colors duration-700', {
									'text-mediumPurple': !darkMode,
									'text-orangedRed': darkMode,
								})}
							/>
						</motion.div>
					</Button>

					<div
						className={clsx(
							'relative flex w-full items-center gap-2 rounded-[.6rem] border-b-[.3em] p-[.8rem] transition-colors duration-700',
							darkMode
								? showToOptions
									? 'border-lime bg-matteBlack' // Quando em dark mode e aberto
									: 'border-orangedRed bg-matteBlack' // Quando em dark mode e fechado
								: showToOptions
									? 'border-orangedRed bg-lavender' // Quando em light mode e aberto
									: 'border-rebeccaPurple bg-lavender', // Quando em light mode e fechado
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
							amount={convertedAmount ? formatCurrency(parseFloat(convertedAmount)) : ''}
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
								onHandleClick={() => setShowToOptions(!showToOptions)}
								selectedCurrency={toInput}
								className={clsx(
									'flex w-full cursor-pointer items-center gap-[.6rem] border-l p-[.4rem] font-inter transition-colors duration-700',
									{
										'border-l-nero text-nero': !darkMode,
										'border-l-ghostWhite text-ghostWhite': darkMode,
									},
								)}
							/>
							<TiArrowSortedDown
								size={18}
								className={clsx(
									'absolute right-[.4rem] top-1/2 -translate-y-1/2 transition-colors duration-700',
									darkMode
										? showToOptions
											? 'text-lime' // Quando em dark mode e aberto
											: 'text-orangedRed' // Quando em dark mode e fechado
										: showToOptions
											? 'text-orangedRed' // Quando em light mode e aberto
											: 'text-rebeccaPurple', // Quando em light mode e fechado

									// Animação de rotação da seta
									showToOptions
										? '-rotate-180 transition-transform duration-300 ease-in'
										: 'rotate-0 transition-transform duration-300 ease-in',
								)}
							/>
							<CurrencyOptions
								setShowOptions={setShowToOptions}
								currencies={currencies}
								onHandleClick={setToInput}
								showOptions={showToOptions}
							/>
						</div>
					</div>
				</Form>
			</Main>

			<Footer />
		</>
	);
}
