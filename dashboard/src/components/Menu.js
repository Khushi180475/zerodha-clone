import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Get real username from localStorage
  const username = localStorage.getItem("username") || "User";
  // Get initials for avatar
  const initials = username.slice(0, 2).toUpperCase();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const menuItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Orders", path: "/dashboard/orders" },
    { label: "Holdings", path: "/dashboard/holdings" },
    { label: "Positions", path: "/dashboard/positions" },
    { label: "Funds", path: "/dashboard/funds" },
    { label: "Apps", path: "/dashboard/apps" },
  ];

  return (
    <div className="menu-container">
      <img src="/media/logo.svg" alt="Zerodha" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={item.path}
                onClick={() => setSelectedMenu(index)}
              >
                <p className={selectedMenu === index ? "menu selected" : "menu"}>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        {/* Profile dropdown */}
        <div
          className="profile"
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <div className="avatar">{initials}</div>
          <p className="username">{username}</p>
        </div>

        {/* Logout dropdown */}
        {isProfileDropdownOpen && (
          <div
            className="bg-white border rounded shadow-sm p-2"
            style={{ position: "absolute", right: "0", top: "100%", zIndex: 100, minWidth: "150px" }}

          >
            <button
              className="btn btn-sm btn-outline-danger w-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;