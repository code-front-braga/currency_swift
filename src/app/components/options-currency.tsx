interface CurrencyOptionsProps {
	currencies: string[];
	onHandleClick: VoidFunction;
	ulClassName: string;
	liClassName: string;
}

export default function CurrencyOptions({ currencies, onHandleClick, ulClassName, liClassName }: CurrencyOptionsProps) {
	return (
		<ul className={ulClassName}>
			{currencies.map(currency => (
				<li key={currency} onClick={onHandleClick} className={liClassName}>
					{currency}
				</li>
			))}
		</ul>
	);
}
