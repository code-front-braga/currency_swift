import getImage from '@/utils/getImage';
import Image from 'next/image';
import Button from './button';

interface CurrencySelectorProps extends React.HTMLAttributes<HTMLButtonElement> {
	selectedCurrency: string;
	onHandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CurrencySelector({ selectedCurrency, onHandleClick, ...props }: CurrencySelectorProps) {
	const currencyCode = selectedCurrency.slice(0, 2); // Obtém o código da moeda (2 primeiros caracteres)

	return (
		<Button
			onClick={e => {
				e.preventDefault(); // Evita o comportamento padrão do botão
				onHandleClick(e); // Garante que o método de selecionar a moeda seja chamado
			}}
			{...props}
		>
			<Image src={getImage(currencyCode)} alt={`Flag of ${currencyCode}`} width={22} height={16} />
			<span>{selectedCurrency}</span>
		</Button>
	);
}
