import "./carouselCard.css";

export default function CarouselCard({ material }) {
  return (
    <div className="carouselCard">
      {material.map((item, index) => (
        <div className="cardDiv" key={index}>
          {Object.entries(item).map(([key, value]) =>{
            if (key == "name"){
              return <h1 key={key}>{value}</h1>
            }
            else{
            return ( 
            <div key={key}>
              <p>
                {value}
              </p>
            </div>
          )}})}
        </div>
      ))}
    </div>
  );
}
