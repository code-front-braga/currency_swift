type InputProps = {
	type: string;
	amount: string;
	onAmountChange: VoidFunction;
};

export default function Input({ type, amount, onAmountChange, ...props }: InputProps) {
	return <input type={type} value={amount} onChange={onAmountChange} {...props} />;
}
