'use client';

import { motion } from 'motion/react';

export default function ThemeToggle() {
	return (
		<button className="relative flex h-[3rem] w-[5rem] cursor-pointer items-center self-start rounded-full bg-red-500 p-[.5rem]">
			<motion.div
				className="h-[2.2rem] w-[2.2rem] rounded-full bg-blue-600"
				layout
				transition={{ type: 'spring', visualDuration: 0.6, bounce: 0.5 }}
			/>
		</button>
	);
}
