import "./carouselCard.css";

export default function CarouselCard({ material }) {
  return (
    <div className="carouselCard">
      <p>{material.name}</p>
      <p>{material.material}</p>
    </div>
  );
}
