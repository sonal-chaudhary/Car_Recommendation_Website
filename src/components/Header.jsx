import React, { useState } from "react";
import "../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faFireFlameCurved,
  faBolt,
  faCarCrash,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // 🔹 Handle search when user presses Enter
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (query.trim()) {
        navigate(`/search?query=${encodeURIComponent(query.trim())}`);
        setQuery("");
      }
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="site-header">
      {/* 🔹 Left section - Brand */}
      <div className="header-left">
        <div className="brand">
          <div className="brand-icon">C</div>
          <div className="brand-text">CarMatrix</div>
        </div>
      </div>

      {/* 🔹 Center section - Search bar */}
      <div className="header-center">
        <div className="top-search">
          <input
            type="text"
            placeholder="Search site..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>

      {/* 🔹 Right section - Navigation */}
      <div className="header-right">
        <nav className="nav-links">
          <Link to="/sales" className="nav-item">
            Sales
          </Link>

          {/* 🔹 News/Reviews Dropdown */}
          <div className="nav-item dropdown" onClick={toggleDropdown}>
            News/Reviews ▾
            {showDropdown && (
              <div className="dropdown-menu">
                <p><FontAwesomeIcon icon={faCarSide} />  Upcoming Tesla Model 3 launch next month</p>
                <p><FontAwesomeIcon icon={faFireFlameCurved} /> BMW X5 facelift spotted testing in Germany</p>
                <p><FontAwesomeIcon icon={faBolt} /> Tata Curvv EV breaks sales record in India</p>
                <p><FontAwesomeIcon icon={faCarCrash} /> Major accident involving Mahindra XUV700 on NH-8</p>
                <p><FontAwesomeIcon icon={faStar} /> Hyundai Creta 2025 – Honest owner review</p>
              </div>
            )}
          </div>

          {/* 🔹 Login/Register Button */}
          <Link to="/login" className="login-btn">
            Login / Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
