export default function ProductCard() {
  return (
    <>
    <img src={productImage}/>
      <h1>{productName}</h1>
      <h3>{location}</h3>
      {highlights.map((highlight) => (
        <div><p>{highlight}</p></div>
      ))}
    </>
  );
}
