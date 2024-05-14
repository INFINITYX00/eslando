import { useState } from "react";
import "./recycle.css";
import { Carousel, CarouselItem } from "react-bootstrap";

export default function Recycle({ recycle }) {
  const [displayShops, setDisplayShops] = useState(false);
  const [formData, setFormData] = useState("");
  const [shops, setShops] = useState([]);

  // commit

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
    const shopIds = json.suggestions.map((suggestion) => ({
      id: suggestion.placePrediction.placeId,
    }));

    const shops = [];

    await Promise.all(
      shopIds.map(async (shop) => {
        const shopData = await getPlace(shop.id);
        shops.push(shopData);
      })
    );
    setShops(shops);
  }

  async function getPlace(placeId) {
    const googlePlacesApiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-FieldMask":
            "displayName,formattedAddress,currentOpeningHours,nationalPhoneNumber,rating",
          "X-Goog-Api-Key": googlePlacesApiKey,
        },
      }
    );
    const json = await response.json();

    let placeName = undefined;
    let placeAddress = undefined;
    let placePhone = undefined;
    let placeRating = undefined;
    let placeHours = undefined;

    if (json.displayName.text) {
      placeName = json.displayName.text;
    }
    if (json.formattedAddress) {
      placeAddress = json.formattedAddress;
    }
    if (json.nationalPhoneNumber) {
      placePhone = json.nationalPhoneNumber;
    }
    if (json.rating) {
      placeRating = json.rating;
    }
    if (json.currentOpeningHours) {
      placeHours = json.currentOpeningHours.weekdayDescriptions;
    }

    return {
      name: placeName,
      address: placeAddress,
      phone: placePhone,
      rating: placeRating,
      hours: placeHours,
    };
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
              <div className="carouselItem">
                <div className="shopCard">
                  <h4>{shop.name}</h4>

                  <p>
                    <img src="address.svg" alt="address icon" />
                    {shop.address}
                  </p>

                  {shop.phone && (
                    <p>
                      <img src="phone.svg" alt="phone icon" />
                      {shop.phone}
                    </p>
                  )}

                  {shop.rating && (
                    <p>
                      <img src="star.svg" alt="star icon" />
                      {shop.rating}
                    </p>
                  )}

                  {shop.hours && (
                    <p className="openingHours">
                      <img src="hour.svg" alt="hour icon" />
                      <div className="hours">
                        {shop.hours.map((day) => (
                          <p className="day" key={day}>
                            {day}
                          </p>
                        ))}
                      </div>
                    </p>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      )}
    </>
  );
}
