import styles from './page.module.css';
import Header from './header/header';
import ProductCard from './productCard/productCard';
import Menu from './menu/menu';
import Footer from './footer/footer';

export default function Home() {
	let menuData = {
		materials: ['cotton', 'wool'],
		careInstructions: [
			{
				image: 'exampleImageUrl',
				instruction: 'exampleInstruction',
			},
		],
		recycle: [
			{
				name: 'Recycle Shop 1',
				address: '123 Fake Street',
				phone: '0756116675',
			},
		],
	};

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<Header />
				<ProductCard
					productImage={'exampleImageUrl'}
					productName={'exampleName'}
					location={'exampleLocation'}
					highlights={['exampleHightLight']}
				/>
				<Menu data={menuData} />
				<Footer />
			</div>
		</main>
	);
}
