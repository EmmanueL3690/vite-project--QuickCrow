import React from "react";
import "../styles/ExploreByLocation.css";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Lagos", image: "\lagos.jpg" },
  { name: "Abuja", image: "\Abuja.jpg" },
  { name: "Kano", image: "\Kano.jpg" },
  { name: "Port Harcourt", image: "\Port Harcourt.jpg" },
  { name: "Ibadan", image: "\Ibadan.jpg" },
  { name: "Benin City", image: "\Benin City.jpg" },
];

const ExploreByLocation = () => {
  return (
    <section className="explore-section">
      <h2 className="explore-title">Explore by Location</h2>
      <div className="location-grid">
        {locations.map((loc) => (
          <div className="location-card" key={loc.name}>
            <img src={loc.image} alt={loc.name} className="location-image" />
            <div className="location-info">
              <span className="location-name">{loc.name}</span>
              <MapPin className="location-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreByLocation;

