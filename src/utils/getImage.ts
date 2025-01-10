export default function getImage(code: string): string {
	const currencyCode = code.toLowerCase(); // Normaliza para minúsculo
	return `https://flagcdn.com/${currencyCode}.svg`; // Retorna a URL da bandeira
}
