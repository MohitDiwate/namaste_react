import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://seeklogo.com/images/G/good-food-logo-36B7F2C85D-seeklogo.com.png"
          alt="logo"
        />
      </div>
      <div className="menu-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Cards = ({ resData }) => {
  const { image_url, name, cuisines, price_for_two, delivery_time } = resData;
  return (
    <div className="card">
      <img src={image_url} />
      <div className="card-body">
        <h2>{name}</h2>
        <p>{cuisines}</p>
        <p>Rs.{price_for_two}</p>
        <p>Time: {delivery_time}</p>
      </div>
    </div>
  );
};

const resObj = {
  restaurants: [
    {
      name: "The Spice House",
      cuisines: "Indian, Chinese, Thai",
      rating: 4.5,
      price_for_two: 800,
      delivery_time: "30-40 mins",
      image_url:
        "https://tse3.mm.bing.net/th?id=OIP.u_CHGImlbiJx89gmGn-g8wAAAA&pid=Api&P=0&h=180",
    },
    {
      name: "Pizza Mania",
      cuisines: "Italian, Fast Food",
      rating: 4.2,
      price_for_two: 600,
      delivery_time: "25-35 mins",
      image_url:
        "https://tse4.mm.bing.net/th?id=OIP.GjIwCh89aXCNSbCMbriWkwHaE7&pid=Api&P=0&h=180",
    },
    {
      name: "Sushi Delight",
      cuisines: "Japanese, Asian",
      rating: 4.8,
      price_for_two: 1200,
      delivery_time: "40-50 mins",
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.9NgrTbuOGEPpqLK6EUO4CQHaE8&pid=Api&P=0&h=180",
    },
    {
      name: "Burger Nation",
      cuisines: "American, Fast Food",
      rating: 4.3,
      price_for_two: 700,
      delivery_time: "20-30 mins",
      image_url:
        "https://tse4.mm.bing.net/th?id=OIP.QDGp8bFUaQloSl7hFZypfAHaFP&pid=Api&P=0&h=180",
    },
    {
      name: "Tandoori Junction",
      cuisines: "Indian, Mughlai",
      rating: 4.6,
      price_for_two: 900,
      delivery_time: "35-45 mins",
      image_url:
        "https://tse4.mm.bing.net/th?id=OIP.V0NCri9zgi2DuVOIRA0poAHaFI&pid=Api&P=0&h=180",
    },
    {
      name: "Pasta Paradise",
      cuisines: "Italian, Continental",
      rating: 4.1,
      price_for_two: 750,
      delivery_time: "30-40 mins",
      image_url:
        "https://tse1.mm.bing.net/th?id=OIP.pKdTBEd8wbSL9ZiVHGzOaQHaE8&pid=Api&P=0&h=180",
    },
    {
      name: "Dragon Wok",
      cuisines: "Chinese, Thai",
      rating: 4.4,
      price_for_two: 850,
      delivery_time: "25-35 mins",
      image_url:
        "https://tse4.mm.bing.net/th?id=OIP.ZKBzzqqqYfPvKya63Ri6xgHaE8&pid=Api&P=0&h=180",
    },
    {
      name: "The Kebab Factory",
      cuisines: "Indian, Barbecue",
      rating: 4.7,
      price_for_two: 1000,
      delivery_time: "40-50 mins",
      image_url:
        "https://tse2.mm.bing.net/th?id=OIP.9NgrTbuOGEPpqLK6EUO4CQHaE8&pid=Api&P=0&h=180",
    },
    {
      name: "Green Leaf",
      cuisines: "Vegetarian, Healthy Food",
      rating: 4.5,
      price_for_two: 650,
      delivery_time: "20-30 mins",
      image_url: "https://source.unsplash.com/400x300/?vegetarian-food",
    },
    {
      name: "Ocean's Catch",
      cuisines: "Seafood, Continental",
      rating: 4.6,
      price_for_two: 1100,
      delivery_time: "35-45 mins",
      image_url: "https://source.unsplash.com/400x300/?seafood",
    },
  ],
};

const Body = () => {
  return (
    <div className="res-container">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for restuarnt,foods,caffes...."
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="card-container">
        {/* <Cards resData={resObj.restaurants[0]} />
        <Cards resData={resObj.restaurants[1]} />
        <Cards resData={resObj.restaurants[2]} />
        <Cards resData={resObj.restaurants[3]} />
        <Cards resData={resObj.restaurants[4]} />
        <Cards resData={resObj.restaurants[5]} />
        <Cards resData={resObj.restaurants[6]} /> */}
        {resObj.restaurants.map((resturant) => (
          <Cards key={resturant.name} resData={resturant} />
        ))}
        {/* <Cards /> */}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(<App />);
