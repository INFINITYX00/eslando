import "./carouselCard.css";

export default function CarouselCard({ material }) {
  return (
    <div className="carouselCard">
      {material.map((item, index) => (
        <div key={index}>
          {Object.entries(item).map(([key, value]) => (
            <div key={key}>
              <p>
                {key}:{value}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
