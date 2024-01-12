import { useState, useEffect } from "react";
import gsap from "gsap";
import Navbar2 from "./Navbar2";
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

  useEffect(() => {
    gsap.from(".dashboard-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="mx-auto p-8 bg-[#f6f6f0]">
        <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>

        <div className="flex flex-col min-h-[70vh]">
          <div className="bg-[#f6f6f0] p-4 rounded-md dashboard-item">
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
          <div className="bg-[#f6f6f0] p-4 rounded-md shadow-md dashboard-item">
            <h2 className="text-xl font-bold mb-4 ">Order History</h2>
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
          <div className="bg-[#f6f6f0] p-4 rounded-md shadow-md dashboard-item">
            <h2 className="text-xl font-bold mb-4">Saved Addresses</h2>
            <ul>
              {savedAddresses.map((address, index) => (
                <li key={index}>{address}</li>
              ))}
            </ul>
          </div>

          {/* Favorite Brands */}
          <div className="bg-[#f6f6f0] p-4 rounded-md shadow-md dashboard-item">
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
