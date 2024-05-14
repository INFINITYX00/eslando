import styles from "./page.module.css";
import LandingPage from "./landing-page/landing-page";
import Header from "./header/header";
import ProductCard from "./productCard/productCard";
import Menu from "./menu/menu";
import Footer from "./footer/footer";
import productData from "../../productData";

export default function Home() {
  let data = productData[1].product;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.landing}>
          <LandingPage productName={data.name} brand={data.brand} />
        </div>
        <div className={styles.content}>
          <Header />
          <ProductCard
            productImage={data.imageUrl}
            productName={data.name}
            brand={data.brand}
            location={data.countryOfOrigin}
            highlights={data.highlights}
          />
          <Menu data={data.menu} />
          <Footer />
        </div>
      </div>
    </main>
  );
}
