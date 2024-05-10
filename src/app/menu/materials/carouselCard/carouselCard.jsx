import "./carouselCard.css";

export default function CarouselCard({ material }) {
  return (
    <div className="carouselCard">
      <div className="borderbox">
        {material.map((item, index) => (
          <div className="cardDiv" key={index}>
            {Object.entries(item).map(([key, value]) => {
              if (key == "name") {
                return <h1 key={key}>{value}</h1>;
              } else {
                return (
                  <div className="textDiv" key={key}>
                    <p>{value}</p>
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
