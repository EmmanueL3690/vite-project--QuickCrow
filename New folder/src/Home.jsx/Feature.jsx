import "./Feature.css";

const features = [
  {
    id: 1,
    name: "Loaded fries",
    description: "1,500",
    image: "\image 27.png",
  },
  {
    id: 2,
    name: "Spaghetti",
    description: "3,500",
    image: "\image 21 (1).png",
  },
  {
    id: 3,
    name: "Potato fries",
    description: "3,500",
    image: "\image 4.png",
  },
];

export default function FeatureCards() {
  return (
    <div className="container2">
      <h2 className="title">Recommendations</h2>
      <div className="cards-container">
        {features.map((item) => (
          <div key={item.id} className="card">
            <div className="image-container">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="image"
              />
            </div>
            <div className="content">
              <div className="header">
                <h3 className="restaurant-name">{item.name}</h3>
              </div>
              <div className="foot">
                <p className="description">{item.description}</p>
                <button className="btn">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

