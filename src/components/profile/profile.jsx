import React, { useState } from "react";
import "./profile.css";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa"; // Changed to a valid icon
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../redux/action/useravtion";
import { Link, useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom for routing
import toast from "react-hot-toast";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, error, message, loading } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchUser(searchTerm));
    if (users.length === 0) {
      toast.error("No Result found ");
    }
  };

  const handleUserClick = (id, e) => {
    e.preventDefault(); // Prevent default behavior
    navigate(`/user/${id}`);
  };
  

  return (
    <main>
      <div className="search">
        <form onSubmit={handleSearch} className="search-bar">
          <FaUserCircle size={25} /> {/* Changed to a valid icon */}
          <input
            type="text"
            placeholder="Search for Customer"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit">
            <IoMdSearch size={25} />
          </button>
        </form>
      </div>
      {users && users.length > 0 && (
        <div className="usercards">
          {users.map((user) => (
            <div
              key={user._id}
              className="cards"
              onClick={(e) => handleUserClick(user._id, e)}
            >
              <div className="cardetails">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <section className="card-section">
        <Card
          className="flex carde"
          style={{ width: "100%", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          <Card.Body>
            <Card.Title>Registered Customers</Card.Title>
          </Card.Body>
        </Card>
      </section>
    </main>
  );
};

export default Profile;
