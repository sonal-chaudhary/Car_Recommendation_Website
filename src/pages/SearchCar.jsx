import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchCars } from "../services/carService";
import "../styles/SearchCar.css";

export default function SearchCar() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      if (!query) return;
      try {
        const data = await searchCars(query);
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, [query]);

  return (
    <div className="search-results">
      {/* <h2>"{query}"</h2> */}

      {cars.length === 0 ? (
        <p>No cars found.</p>
      ) : (
        <div className="car-grid">
          {cars.map((car) => (
            <div key={car._id} className="car-card">
              <h3>{car.basicInfo?.name || "Unknown Car"}</h3>
              <p><b>Brand:</b> {car.basicInfo?.brand || "N/A"}</p>
              <p><b>Variant:</b> {car.basicInfo?.variant || "N/A"}</p>
              <p><b>Fuel Type:</b> {car.basicInfo?.fuelType || "N/A"}</p>
              <p><b>Transmission:</b> {car.basicInfo?.transmission || "N/A"}</p>
              <p><b>Engine:</b> {car.basicInfo?.engineCC || "N/A"}</p>
              <p><b>Seating Capacity:</b> {car.basicInfo?.seatingCapacity || "N/A"}</p>
              <p><b>Price:</b> {car.basicInfo?.price?.exShowroom || "Not Available"}</p>

              {/* Features Section */}
              {car.features && (
                <>
                  <h4>Features:</h4>
                  <ul>
                    <li>Airbags: {car.features?.airbags || "N/A"}</li>
                    <li>ABS: {car.features?.abs || "N/A"}</li>
                    <li>Touchscreen: {car.features?.touchscreen || "N/A"}</li>
                    <li>Sunroof: {car.features?.sunroof || "N/A"}</li>
                    <li>Rear Camera: {car.features?.rearCamera || "N/A"}</li>
                    <li>Cruise Control: {car.features?.cruiseControl || "N/A"}</li>
                  </ul>
                </>
              )}

              {/* Availability Section */}
              {car.availability && (
                <>
                  <h4>Availability:</h4>
                  <p>
                    Available in:{" "}
                    {car.availability?.citiesAvailable?.length
                      ? car.availability.citiesAvailable.join(", ")
                      : "Not listed"}
                  </p>
                  <p>
                    Status:{" "}
                    {car.availability?.available ? "Available ✅" : "Not Available ❌"}
                  </p>
                </>
              )}

              {/* Spare Parts Pricing */}
              {car.partPrices && (
                <>
                  <h4>Spare Part Prices:</h4>
                  <ul>
                    <li>Headlight: {car.partPrices?.headlight || "N/A"}</li>
                    <li>Backlight: {car.partPrices?.backlight || "N/A"}</li>
                    <li>Front Bumper: {car.partPrices?.frontBumper || "N/A"}</li>
                    <li>Rear Bumper: {car.partPrices?.rearBumper || "N/A"}</li>
                    <li>Side Mirror: {car.partPrices?.sideMirror || "N/A"}</li>
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


