import styles from "./page.module.css";
import Header from "./header/header";
import ProductCard from "./productCard/productCard";
import Menu from "./menu/menu";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Header />
        <ProductCard
          productImage={"exampleImageUrl"}
          productName={"exampleName"}
          location={"exampleLocation"}
          highlights={["exampleHightLight"]}
        />
        <Menu />
        <Footer />
      </div>
    </main>
  );
}
