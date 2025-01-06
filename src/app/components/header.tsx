import { CgArrowsExchangeAltV } from 'react-icons/cg';

export default function Header() {
	return (
		<header className="fixed top-[8rem] w-full">
			<div className="flex items-center justify-center">
				<CgArrowsExchangeAltV size={36} />
				<h1 className="font-alumniSansPinstripe text-[3rem] font-semibold">
					Currency <span className="font-inter">$</span>wift
				</h1>
			</div>
		</header>
	);
}
