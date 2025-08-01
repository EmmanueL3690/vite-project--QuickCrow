import "./NewRestaurants.css";

const restaurants = [
  {
    id: 1,
    name: "The Sass Dose",
    description: "Elegant bites to start your day",
    image: "\image 40.png",
    logo: "\Ellipse 1 (3).png",
    category: "NEW",
    time: "20 min",
    rating: "4.0",
  },
  {
    id: 2,
    name: "Breakfast Bistro",
    description: "Breakfast, slow and soulful.",
    image: "\image 41.png",
    logo: "\Ellipse 1 (4).png",
    category: "NEW",
    time: "35 min",
    rating: "4.0",
  },
  {
    id: 3,
    name: "The Sassy Dose",
    description: "Elegant bites to start your day",
    image: "\Frame 85.png",
    logo: "\Ellipse 1 (5).png",
    category: "NEW",
    time: "20 min",
    rating: "4.0",
  },
];

export default function NewRestaurants() {
  return (
    <div className="container">
      <h2 className="title">New Restaurants</h2>
      <div className="cards-container">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="card">
            <div className="image-container">
              <img
                src={restaurant.image || "/placeholder.svg"}
                alt={`${restaurant.name} banner`}
                className="image"
              />
              <div className="category-tag">{restaurant.category}</div>
            </div>
            <div className="content">
              <div className="header">
                <div className="info">
                  <img
                    src={restaurant.logo || "/placeholder.svg"}
                    alt={`${restaurant.name} logo`}
                    className="logo"
                  />
                  <h3 className="restaurant-name">{restaurant.name}</h3>
                </div>
                <div className="icon-row">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>

              <p className="description">{restaurant.description}</p>

              <div className="foot">
                <div className="time">
                  <i className="fa-regular fa-clock"></i>
                  <span>{restaurant.time}</span>
                </div>
                <div className="rating">
                  <i className="fa-solid fa-star star-icon"></i>
                  <span>{restaurant.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



