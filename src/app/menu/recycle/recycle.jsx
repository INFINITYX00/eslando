import { useState } from "react";
import "./recycle.css";

export default function Recycle({ recycle }) {
  const [displayShops, setDisplayShops] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    setDisplayShops(true);
  };

  return (
    <>
      <form className="form" onSubmit={handleSumbit}>
        <h3 className="recycleHeading">♻️ Find Your Local Recycling Shop</h3>
        <div className="inputField">
          <input placeholder="Enter Postcode" />
          <button type="submit">Search</button>
        </div>
      </form>
      {displayShops && (
        <div>
          {recycle.map((shop) => (
            <div className="shopCard" key={shop.name}>
              <h3>{shop.name}</h3>
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
