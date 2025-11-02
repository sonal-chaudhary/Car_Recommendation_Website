import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSackDollar,
  faCar,
  faGasPump,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch city data dynamically (from JSON file)
  useEffect(() => {
    fetch("/src/data/cities.json")
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.error("Error loading cities:", err));
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % 9);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + 9) % 9);

  const handleSearch = async () => {
    if (!query.trim()) return;
    navigate(`/search?query=${query}`);
  };

  const getCardClass = (index) => {
    const middleIndex = (currentIndex + 1) % 9;
    if (index === currentIndex) return "left";
    if (index === middleIndex) return "active";
    if (index === (currentIndex + 2) % 9) return "right";
    return "hidden";
  };

  const scrollCities = (direction) => {
    const scrollContainer = document.getElementById("city-scroll");
    const scrollAmount = 400;
    if (direction === "left") {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <Header />

      {/* 🔹 Hero Section */}
      <main className="hero-section">
        <div className="overlay-box">
          <h1>Find Your Perfect Drive.</h1>

          <div className="tab-buttons">
            <button className="active">Search your dream Car</button>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Type Car Brand, Model, or Keyword..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="search-icon" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className="filters">
            <button>
              <FontAwesomeIcon icon={faSackDollar} /> Budget
            </button>
            <button>
              <FontAwesomeIcon icon={faCar} /> Body Type
            </button>
            <button>
              <FontAwesomeIcon icon={faGasPump} /> Fuel Type
            </button>
            <button>
              <FontAwesomeIcon icon={faGear} /> Transmission
            </button>
          </div>

          <button className="search-btn">Search</button>
        </div>
      </main>

      {/* 🔹 Carousel Section */}
      <section className="carousel-section">
        <h2>Explore Cars</h2>

        <div className="carousel-container">
          <button className="carousel-btn left" onClick={handlePrev}>
            ❮
          </button>

          <div className="carousel-track">
            {[
              {
                img: "/src/assets/cars/Audi-Q8.png",
                name: "Audi Q8",
                price: "Rs. 1.10 Cr*",
                fuel: "Petrol",
                trans: "Automatic",
              },
              {
                img: "/src/assets/cars/BMW-7-series.png",
                name: "BMW 7 Series",
                price: "Rs. 1.79 - 1.82 Cr*",
                fuel: "Petrol",
                trans: "Automatic",
              },
              {
                img: "/src/assets/cars/Hyundai-creta.png",
                name: "Hyundai Creta",
                price: "Rs. 11.11 - 20.92 Lakh*",
                fuel: "Petrol / Diesel",
                trans: "Manual / Automatic",
              },
              {
                img: "/src/assets/cars/Kia-seltos.png",
                name: "Kia Seltos",
                price: "Rs. 10.79 - 19.81 Lakh*",
                fuel: "Petrol / Diesel",
                trans: "Manual / Automatic",
              },
              {
                img: "/src/assets/cars/XUV.png",
                name: "Mahindra XUV700",
                price: "Rs. 13.77 - 17.72 Lakh*",
                fuel: "Petrol / Diesel",
                trans: "Manual / Automatic",
              },
              {
                img: "/src/assets/cars/Kushaq.png",
                name: "Skoda Kushaq",
                price: "Rs. 10.99 - 19.09 Lakh*",
                fuel: "Petrol",
                trans: "Manual / Automatic",
              },
              {
                img: "/src/assets/cars/InnovaCrysta.png",
                name: "Toyota Innova Crysta",
                price: "Rs. 19.99 - 27.08 Lakh*",
                fuel: "Diesel",
                trans: "Manual",
              },
              {
                img: "/src/assets/cars/TataCurvv.png",
                name: "Tata Curvv EV",
                price: "Rs. 17.49 - 22.24 Lakh*",
                fuel: "Electric",
                trans: "Automatic",
              },
              {
                img: "/src/assets/cars/Kwid.png",
                name: "Renault KWID",
                price: "Rs. 4.70 - 6.45 Lakh*",
                fuel: "Petrol",
                trans: "Manual / AMT",
              },
            ].map((car, i) => (
              <div key={i} className={`carousel-card ${getCardClass(i)}`}>
                <img src={car.img} alt={car.name} className="car-image" />
                <h3>{car.name}</h3>
                <p>{car.price}</p>
                <p>Fuel Type: {car.fuel}</p>
                <p>Transmission: {car.trans}</p>
              </div>
            ))}
          </div>

          <button className="carousel-btn right" onClick={handleNext}>
            ❯
          </button>
        </div>
      </section>

      {/* 🔹 Brands Section */}
      <section className="brands-section">
        <h2>All Brands</h2>
        <div className="brands-box">
          <div className="brands-grid">
            {[
              { name: "BMW", img: "/src/assets/brands/BMW.jpeg" },
              { name: "Citroen", img: "/src/assets/brands/Citroen.png" },
              { name: "Jeep", img: "/src/assets/brands/JEEP.png" },
              { name: "Land Rover", img: "/src/assets/brands/LandRover.png" },
              { name: "Mahindra", img: "/src/assets/brands/Mahindra.png" },
              { name: "Maruti Suzuki", img: "/src/assets/brands/Suzuki.png" },
              { name: "Nissan", img: "/src/assets/brands/Nissan.png" },
              { name: "Renault", img: "/src/assets/brands/Renault.png" },
              { name: "Skoda", img: "/src/assets/brands/Skoda.png" },
              { name: "Tata", img: "/src/assets/brands/Tata.png" },
              { name: "Toyota", img: "/src/assets/brands/Toyota.png" },
              { name: "MG", img: "/src/assets/brands/MG.png" },
              { name: "KIA", img: "/src/assets/brands/KIA.png" },
              { name: "Honda", img: "/src/assets/brands/Honda.png" },
            ].map((brand) => (
              <div key={brand.name} className="brand-card">
                <img src={brand.img} alt={brand.name} />
                <p>{brand.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="view-more">View More Brands</div>
      </section>

      {/* 🔹 Used Cars By City */}
      <section className="city-section">
        <h2>Used Cars By City</h2>

        <div className="city-slider-container">
          <button className="slider-btn prev" onClick={() => scrollCities("left")}>
            ❮
          </button>

          <div className="city-grid" id="city-scroll">
            {cities.map((city) => (
              <div key={city.name} className="city-card">
                <img src={city.img} alt={city.name} />
                <h3>{city.name}</h3>
                <p className="city-cars">{city.cars}</p>
                <p className="city-price">{city.price}</p>
              </div>
            ))}
          </div>

          <button className="slider-btn next" onClick={() => scrollCities("right")}>
            ❯
          </button>
        </div>
      </section>

      {/* 🔹 Explore More Section */}
      <section className="explore-more">
        <h2>Find Your Dream Car Today</h2>
        <p>Compare models, explore cities, and drive home with confidence. Your perfect car awaits.</p>
        <button className="explore-btn">Explore Cars</button>
      </section>

      {/* 🔹 Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>CarMatrix</h3>
            <p>Revolutionizing the way you discover cars — one city at a time.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Cities</Link></li>
              <li><Link to="#">Top Brands</Link></li>
              <li><Link to="#">Compare</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Email: support@carmatrix.in</p>
            <p>Phone: +91 98765 43210</p>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 CarMatrix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
