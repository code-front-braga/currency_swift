interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	handleSubmit: VoidFunction;
	children: React.ReactNode;
}

export default function Form({ handleSubmit, children, ...props }: FormProps) {
	return (
		<form onSubmit={handleSubmit} {...props}>
			{children}
		</form>
	);
}
