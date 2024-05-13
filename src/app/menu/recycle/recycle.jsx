import { useState } from "react";
import "./recycle.css";
import { Carousel, CarouselItem } from "react-bootstrap";

export default function Recycle({ recycle }) {
  const [displayShops, setDisplayShops] = useState(false);
  const [formData, setFormData] = useState("");
  const [shops, setShops] = useState([]);

  async function handleSumbit(e) {
    e.preventDefault();
    const lonLat = await getLonLat(formData);
    getShops(lonLat);
    setDisplayShops(true);
  }

  async function getLonLat(location) {
    const geoapifyKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=${geoapifyKey}`
    );
    const data = await response.json();
    const lonLat = {
      lon: data.features[0].properties.lon,
      lat: data.features[0].properties.lat,
    };
    return lonLat;
  }

  async function getShops(lonLat) {
    const googlePlacesApiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    const response = await fetch(
      "https://places.googleapis.com/v1/places:autocomplete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": googlePlacesApiKey,
        },
        body: JSON.stringify({
          input: "recycle",
          locationBias: {
            circle: {
              center: {
                latitude: lonLat.lat,
                longitude: lonLat.lon,
              },
              radius: "500.0",
            },
          },
        }),
      }
    );
    const json = await response.json();
    const shops = json.suggestions.map((suggestion) => ({
      name: suggestion.placePrediction.structuredFormat.mainText.text,
      address: suggestion.placePrediction.structuredFormat.secondaryText.text,
    }));
    setShops(shops);
  }

  return (
    <>
      <form className="form" onSubmit={handleSumbit}>
        <h3 className="recycleHeading">♻️ Find Your Local Recycling Shop</h3>
        <div className="inputField">
          <input
            placeholder="Enter Postcode"
            id="form"
            onChange={(e) => setFormData(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      {displayShops && (
        <Carousel>
          {shops.map((shop) => (
            <CarouselItem key={shop.name}>
              <div className="shopCard">
                <h4>{shop.name}</h4>
                <p>
                  <img src="address.svg" alt="address icon" />
                  {shop.address}
                </p>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      )}
    </>
  );
}
