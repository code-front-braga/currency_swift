interface CurrencySelectorProps extends React.HTMLAttributes<HTMLInputElement> {
	selectedCurrency: string;
	onHandleClick: () => VoidFunction;
}

export default function CurrencySelector({ selectedCurrency, onHandleClick, ...props }: CurrencySelectorProps) {
	return <input type="button" value={selectedCurrency} onClick={onHandleClick} {...props} />;
}
