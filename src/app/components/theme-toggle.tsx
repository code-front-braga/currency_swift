'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';
import useTheme from '../hooks/useTheme';

interface ThemeToggleProps {
	handleClick: VoidFunction;
}

export default function ThemeToggle({ handleClick }: ThemeToggleProps) {
	const { darkMode } = useTheme();

	return (
		<button
			className={clsx('relative flex h-[3rem] w-[5rem] cursor-pointer items-center self-start rounded-full p-[.5rem]', {
				'justify-start bg-rebeccaPurple bg-opacity-60': !darkMode,
				'justify-end bg-orangedRed bg-opacity-50': darkMode,
			})}
			onClick={handleClick}
		>
			<motion.div
				className={clsx('h-[2.2rem] w-[2.2rem] rounded-full transition-colors duration-700', {
					'bg-ghostWhite': !darkMode,
					'bg-matteBlack': darkMode,
				})}
				layout
				transition={{ type: 'spring', visualDuration: 0.6, bounce: 0.5 }}
			/>
		</button>
	);
}
