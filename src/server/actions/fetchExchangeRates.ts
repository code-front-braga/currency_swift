export interface CurrenciesPair {
	rates: {
		[key: string]: number;
	};
}

export async function fetchExchangeRates(baseCurrency: string): Promise<CurrenciesPair> {
	try {
		const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
		const data: CurrenciesPair = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		return { rates: {} };
	}
}
