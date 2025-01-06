type MainProps = {
	children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
	return (
		<main className="relative flex h-svh w-full flex-col items-center justify-center gap-[2rem] p-[1.8rem]">
			{children}
		</main>
	);
}
