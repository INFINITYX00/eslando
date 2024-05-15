import ProductCSS from "./productCard.module.css";

export default function ProductCard({
  productImage,
  productName,
  brand,
  season,
  location,
  highlights,
}) {
  return (
    <>
      <img className={ProductCSS.image} src={productImage} />
      <h1 className={ProductCSS.productName}>{productName}</h1>
      <h2 className={ProductCSS.productBrand}>
        {brand}, {season}
      </h2>
      <h3 className={ProductCSS.productLocation}>Made in {location}</h3>

      <div className={ProductCSS.highlightDiv}>
        {highlights.map((highlight) => (
          <div className={ProductCSS.highlightContainer} key={highlight.title}>
            <img className={ProductCSS.highlightSVG} height="30" width="30" src={highlight.svg} alt="highlight icon" />
            <p className={ProductCSS.pHighlightCard}>{highlight.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
