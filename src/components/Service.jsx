import React from "react";
import "../styles/Service.css";
import { Search, Star, ChefHat, Utensils, Home, Truck } from "lucide-react";

export default function HireServicesPage() {
const categories = [
  { name: "Chef", image: "\Chef.jpg" },
  { name: "Caterer", image: "\Caterer.jpg" },
  { name: "Event Setup", image: "\Event Setup.jpg" },
  { name: "Food Truck", image: "\Food Truck.jpg" },
];

  const professionals = [
    {
      name: "Chef Antoine",
      service: "Private Chef",
      rating: 4.9,
      reviews: 120,
      image: "\Chef Antoine.jpg",
    },
    {
      name: "Gourmet Gatherings",
      service: "Catering Service",
      rating: 4.8,
      reviews: 95,
      image: "\Gourmet Gatherings.jpg",
    },
    {
      name: "Event Elegance",
      service: "Event Setup & Decor",
      rating: 4.7,
      reviews: 80,
      image: "\Event Elegance.jpg",
    },
    {
      name: "Taco Truck Express",
      service: "Food Truck",
      rating: 4.6,
      reviews: 150,
      image: "\Taco Truck Express.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Rose L.",
      review: "Chef Antoine made our anniversary dinner unforgettable! The food was exquisite and the service was impeccable.",
      rating: 5,
    },
    {
      name: "John D.",
      review: "Gourmet Gatherings catered our corporate event, and everything was perfect. Delicious food and professional staff.",
      rating: 5,
    },
    {
      name: "Emily R.",
      review: "Event Elegance transformed our venue into a dream. Their attention to detail is amazing!",
      rating: 4,
    },
  ];

  return (
    <div className="page">
      {/* Banner */}
      <section className="banner">
        <h1>Hire pros for events, meal prep, catering</h1>
        <p>Find the perfect food-related service for your next occasion.</p>
        <div className="search-bar4">
          <input className="it" type="text" placeholder="Find a service (e.g., caterer, chef)" />
          <button><Search size={20} /></button>
        </div>
      </section>

      <main className="main-content">
        {/* Categories */}
        <section className="browse-categories">
          <h2 className="browse-title">Browse Categories</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.name} className="category-card">
                <img src={category.image} alt={category.name} className="category-image" />
                <h3 className="category-name">{category.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Professionals */}
        <section className="section">
          <h2>Top-rated Professionals</h2>
          <div className="grid pros">
            {professionals.map((pro, i) => (
              <div className="pro-card" key={i}>
                <img src={pro.image} alt={pro.name} />
                <h3>{pro.name}</h3>
                <p>{pro.service}</p>
                {/* <div className="rating">
                  <Star size={16} className="star" />
                  <span>{pro.rating}</span> ({pro.reviews} reviews)
                </div> */}
              <div className="rating-container">
                <Star size={16} className="star" />
                <span className="rating-score">4.8</span>
                <span className="rating-reviews">(95 reviews)</span>
              </div>

                <button className="view-profile">View Profile</button>
              </div>
            ))}
          </div>
        </section>

<section className="section">
  <h2>What Our Customers Say</h2>
  <div className="testimonial-slider-wrapper">
    <div className="testimonial-slider">
      {[...testimonials, ...testimonials].map((t, i) => (
        <div className="testimonial-card" key={i}>
          <div className="stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={18}
                className={index < t.rating ? "star" : "star muted"}
              />
            ))}
          </div>
          <p className="review">"{t.review}"</p>
          <p className="author">- {t.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>



        {/* CTA */}
        <section className="cta">
          <h2>Can't find what you're looking for?</h2>
          <p>Post a request and let professionals come to you with their offers.</p>
          <button className="cta-button">Post a Request</button>
        </section>
      </main>
    </div>
  );
}



