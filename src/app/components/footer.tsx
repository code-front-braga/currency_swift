export default function Footer() {
	return (
		<footer className="fixed bottom-0 w-full rounded-t-[3rem] p-[1.2rem]">
			<p className="text-center font-inter text-[1.2rem]">
				&copy; {new Date().getFullYear()} Currency Swift. Created by Leonardo Braga.
			</p>
		</footer>
	);
}
