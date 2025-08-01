import React, { useEffect, useRef } from "react";
import "../styles/TrendingNow.css";

const dishes = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    price: "₦2,500",
    image: "\image 23.png",
    description: "A spicy cheesy delight.",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    price: "₦3,000",
    image: "\image 21 (1).png",
    description: "Classic pasta with rich meat sauce.",
  },
  {
    id: 3,
    name: "Grilled Chicken",
    price: "₦4,200",
    image: "\Grilled Chicken.jpg",
    description: "Juicy chicken with smoky flavor.",
  },
  {
    id: 4,
    name: "Fried Rice Combo",
    price: "₦3,500",
    image: "\Fried Rice Combo.jpg",
    description: "Savory rice with beef and plantain.",
  },
  {
    id: 5,
    name: "Cheeseburger",
    price: "₦2,800",
    image: "\image 8.png",
    description: "Melty cheese on a juicy beef patty.",
  },
  {
    id: 6,
    name: "Dessert",
    price: "₦1,800",
    image: "\Dessert.jpg",
    description: "Sweet creamy indulgent finish.",
  },
];

const TrendingNow = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 1;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Infinite loop
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20); // smooth & continuous

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section className="trending-section">
      <div className="trending-header">
        <h2 className="trending-title">Trending Now</h2>
        <button className="view-all-btn">View All</button>
      </div>
      <div className="trending-scroll-wrapper" ref={scrollRef}>
        {[...dishes, ...dishes].map((dish, index) => (
          <div className="trending-card" key={`${dish.id}-${index}`}>
            <img src={dish.image} alt={dish.name} />
            <div className="card-content">
              <h4>{dish.name}</h4>
              <p className="dish-description">{dish.description}</p>
              <p className="dish-price">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNow;

