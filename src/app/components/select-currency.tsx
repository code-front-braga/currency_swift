interface CurrencySelectorProps extends React.HTMLAttributes<HTMLInputElement> {
	selectedCurrency: string;
	onHandleClick: () => VoidFunction;
	onCurrencyChange: (currency: string) => void;
	label: string;
	labelClassName: string;
}

export default function CurrencySelector({
	selectedCurrency,
	onHandleClick,
	label,
	labelClassName,
	...props
}: CurrencySelectorProps) {
	return (
		<>
			<label className={labelClassName}>{label}</label>
			<input type="button" value={selectedCurrency} onClick={onHandleClick} {...props} />
		</>
	);
}
