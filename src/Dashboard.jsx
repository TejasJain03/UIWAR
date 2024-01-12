import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com",
    address: "123 Luxury Street, Cityville",
  });

  const [orderHistory, setOrderHistory] = useState([
    {
      orderNumber: "ORD123",
      date: "2024-01-15",
      items: [
        { name: "Luxury Watch 1", price: 500 },
        { name: "Luxury Watch 2", price: 700 },
      ],
    },
  ]);

  const [savedAddresses, setSavedAddresses] = useState([
    "123 Luxury Street, Cityville",
    "456 Elite Avenue, Townburg",
  ]);

  const [favoriteBrands, setFavoriteBrands] = useState(["Brand A", "Brand B"]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Details */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            <p>
              <strong>Username:</strong> {userDetails.username}
            </p>
            <p>
              <strong>Email:</strong> {userDetails.email}
            </p>
            <p>
              <strong>Address:</strong> {userDetails.address}
            </p>
          </div>

          {/* Order History */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Order History</h2>
            <ul>
              {orderHistory.map((order) => (
                <li key={order.orderNumber}>
                  <strong>Order Number:</strong> {order.orderNumber}
                  <br />
                  <strong>Date:</strong> {order.date}
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.name}>
                        {item.name} - ${item.price}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Saved Addresses */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Saved Addresses</h2>
            <ul>
              {savedAddresses.map((address, index) => (
                <li key={index}>{address}</li>
              ))}
            </ul>
          </div>

          {/* Favorite Brands */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Favorite Brands</h2>
            <ul>
              {favoriteBrands.map((brand, index) => (
                <li key={index}>{brand}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
