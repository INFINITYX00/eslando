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
          <ul>
            {recycle.map((shop) => (
              <li key={shop.name}>
                <h3>{shop.name}</h3>
                <p>{shop.address}</p>
                <p>{shop.phone}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
