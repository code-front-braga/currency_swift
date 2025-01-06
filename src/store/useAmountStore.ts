import { create } from 'zustand';

type AmountStore = {
	amount: string;
	setAmount: (amount: string) => void;
};

export const useAmountStore = create<AmountStore>(set => ({
	amount: '',
	setAmount: amount => set({ amount }),
}));
