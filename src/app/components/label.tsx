interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	label: string;
}

export default function Label({ label, ...props }: LabelProps) {
	return <label {...props}>{label}</label>;
}
