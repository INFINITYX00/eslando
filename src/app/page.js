"use client";

import styles from "./page.module.css";
import LandingPage from "./landing-page/landing-page";
import Header from "./header/header";
import ProductCard from "./productCard/productCard";
import Menu from "./menu/menu";
import productData from "../../productData";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const [searchParams] = useSearchParams();
  let data = productData[searchParams[1]].product;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.landing}>
          <LandingPage bgImage={data.bgImage} productName={data.name} brand={data.brand} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
          }}
          viewport={{ amount: 0.5 }}
          className={styles.content}
        >
          <Header />
          <ProductCard
            productImage={data.imageUrl}
            productName={data.name}
            brand={data.brand}
            season={data.season}
            location={data.countryOfOrigin}
            highlights={data.highlights}
          />
          <Menu data={data.menu} />
        </motion.div>
      </div>
    </main>
  );
}
