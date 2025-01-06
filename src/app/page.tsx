import Background from './components/background';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import ThemeToggle from './components/theme-toggle';

export default function HomePage() {
	return (
		<>
			<Background />
			<Main>
				<Header />
				<ThemeToggle />
			</Main>
			<Footer />
		</>
	);
}
