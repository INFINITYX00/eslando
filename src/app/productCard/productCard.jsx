import ProductCSS from "./productCard.module.css";
export default function ProductCard({
  productImage,
  productName,
  brand,
  location,
  highlights,
}) {
  return (
    <>
      <img
        className={ProductCSS.image}
        // src={productImage}
        src="https://i.ebayimg.com/images/g/tTMAAOSwkClcdKBR/s-l1200.jpg"
        alt="Picture of clothes"
      />
      <h1 className={ProductCSS.productName}>{productName}</h1>
      <h2 className={ProductCSS.productBrand}>{brand}</h2>
      <h3 className={ProductCSS.productLocation}>Made in {location}</h3>
      <div className={ProductCSS.highlightDiv}>
        {highlights.map((highlight) => (
          <div className={ProductCSS.highlightContainer} key={highlight}>
            <p className={ProductCSS.pHighlightCard}>{highlight}</p>
          </div>
        ))}
      </div>
    </>
  );
}
