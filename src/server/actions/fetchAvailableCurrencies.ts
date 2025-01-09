export async function fetchAvailableCurrencies(): Promise<string[]> {
	try {
		const response = await fetch('https://economia.awesomeapi.com.br/json/available');
		const data = await response.json();

		const currencies = [...new Set(Object.keys(data).map(pair => pair.split('-')[0]))];
		return currencies.sort();
	} catch (error) {
		console.log(error);
		return [];
	}
}
