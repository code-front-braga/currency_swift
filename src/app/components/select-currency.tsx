type CurrencySelectorProps = {
	selectedCurrency: string;
	currencies: string[];
	onHandleClick: () => VoidFunction;
	onCurrencyChange: (currency: string) => void;
	label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function CurrencySelector({ selectedCurrency, onHandleClick, label, ...props }: CurrencySelectorProps) {
	return (
		<div>
			<label>{label}</label>
			<input type="button" value={selectedCurrency} onClick={onHandleClick} {...props} />
		</div>
	);
}
