export default function ProductCard({
  productImage,
  productName,
  brand,
  location,
  highlights,
}) {
  return (
    <>
      <img src={productImage} />
      <h1>{productName}</h1>
      <h2>{brand}</h2>
      <h3>{location}</h3>
      {highlights.map((highlight) => (
        <div key={highlight}>
          <p>{highlight}</p>
        </div>
      ))}
    </>
  );
}
