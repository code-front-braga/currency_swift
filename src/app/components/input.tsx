interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type: string;
	amount: string;
	onAmountChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, amount, onAmountChange, ...props }: InputProps) {
	return <input type={type} value={amount} onChange={onAmountChange} {...props} />;
}
