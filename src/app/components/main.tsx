import clsx from 'clsx';

type MainProps = {
	children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
	return (
		<main
			className={clsx(
				'relative m-auto flex w-full flex-col items-center justify-center gap-[2rem] p-[1.8rem]',
				'lg:flex-row',
			)}
		>
			{children}
		</main>
	);
}
