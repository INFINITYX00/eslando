import { useState } from "react";
import "./recycle.css";

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
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=26a56432f8904934afefd8216f56ce74`
    );
    const data = await response.json();
    const lonLat = {
      lon: data.features[0].properties.lon,
      lat: data.features[0].properties.lat,
    };
    return lonLat;
  }

  async function getShops(lonLat) {
    const response = await fetch(
      "https://places.googleapis.com/v1/places:autocomplete",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": "AIzaSyCUs2wRbLfndCUcX1eJOh2q5bKOZJEfM04",
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
      phone: "unknown",
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
        <div>
          {shops.map((shop) => (
            <div className="shopCard" key={shop.name}>
              <h4>{shop.name}</h4>
              <p>
                <img src="address.svg" alt="address icon" />
                {shop.address}
              </p>
              <p>
                <img src="phone.svg" alt="phone icons" />
                {shop.phone}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
