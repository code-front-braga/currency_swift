interface ExchangeRateData {
	bid: string;
}

interface CurrenciesPair {
	fromCurrency: string;
	toCurrency: string;
}

export async function fetchExchangeRates({
	fromCurrency,
	toCurrency,
}: CurrenciesPair): Promise<ExchangeRateData | null> {

	try {
		const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${fromCurrency}-${toCurrency}`);
		const data = await response.json();

		const key = `${fromCurrency}${toCurrency}`;
		return data[key] || null;
	} catch (error) {
		console.error('Error fetching exchange rates', error);
		return null;
	}
}
