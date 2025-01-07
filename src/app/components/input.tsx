interface InputProps {
	type: string;
	amount: string;
	onAmountChange: VoidFunction;
	labelClassName: string;
	label: string;
	inputClassName: string;
}

export default function Input({
	type,
	amount,
	onAmountChange,
	labelClassName,
	label,
	inputClassName,
	...props
}: InputProps) {
	return (
		<>
			<label className={labelClassName}>{label}</label>
			<input type={type} value={amount} onChange={onAmountChange} {...props} className={inputClassName} />
		</>
	);
}
