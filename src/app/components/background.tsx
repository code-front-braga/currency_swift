export default function Background() {
	return (
		<>
			<div
				className="absolute inset-0 z-0 bg-repeat"
				style={{ backgroundImage: 'url(/glitch-effect.png)', backgroundSize: '120px' }}
			/>
			<div className="absolute inset-0" />
		</>
	);
}
