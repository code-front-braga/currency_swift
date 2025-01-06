import { create } from 'zustand';

// Criação do store com Zustand
interface CurrencyStore {
	selectedCurrency: string;
	setSelectedCurrency: (currency: string) => void;
}

export const useCurrencyStore = create<CurrencyStore>(set => ({
	selectedCurrency: '',
	setSelectedCurrency: currency => set({ selectedCurrency: currency }),
}));
