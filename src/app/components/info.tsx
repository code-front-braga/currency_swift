import clsx from 'clsx';
import { useTheme } from '../hooks/use-theme';

interface InfoProps {
	isInfoOpen: boolean;
}

export default function Info({ isInfoOpen }: InfoProps) {
	const { darkMode } = useTheme();

	return (
		<div
			className={clsx(
				'absolute -top-[11rem] left-1/2 w-[32rem] -translate-x-1/2 gap-1 rounded-[1rem] border p-[.6rem] shadow-2xl transition-all duration-300 ease-in',
				{
					'border-rebeccaPurple bg-lavender text-nero': !darkMode,
					'border-orangedRed bg-nero text-ghostWhite': darkMode,
					'invisible opacity-0': !isInfoOpen,
					'visible opacity-100': isInfoOpen,
				},
			)}
		>
			<p
				className={clsx('font-inter text-[1.2rem]', {
					'text-rebeccaPurple': !darkMode,
					'text-orangedRed': darkMode,
				})}
			>
				Olá! É super simples:
			</p>
			<ol
				className={clsx('flex list-inside list-decimal flex-col font-inter text-[1.2rem] font-normal', {
					'text-nero marker:text-rebeccaPurple': !darkMode,
					'text-ghostWhite marker:text-orangedRed': darkMode,
				})}
			>
				<li>Insira o valor que deseja converter</li>
				<li>Selecione a moeda de origem</li>
				<li>Escolha a moeda para a qual deseja converter</li>
				<li>E aperte o ícone central</li>
			</ol>
		</div>
	);
}
