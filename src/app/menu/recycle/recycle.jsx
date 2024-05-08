import Title from "../title/title";
import { useState } from "react";

export default function Recycle({ recycle }) {
    const [displayShops, setDisplayShops] = useState(false)

    const handleSumbit = (e) => {
        e.preventDefault()
        setDisplayShops(true)
    }

    return (
        <>
        <Title title="Recycle and Repurpose" />
        <form onSubmit={handleSumbit}>
            <input placeholder="Enter Postcode"/>
            <button type="submit">Search for locations</button>
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
    )
}