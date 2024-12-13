import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currentUser, logout } = useAuth();

  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // React Router hook for navigation

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      // Navigate to a new page with the search query
      navigate(`/search?searchBy=${encodeURIComponent(query)}`);
    }
  };

  const handleClick = () => {
    // Refresh the page
    navigate("/");
    window.location.reload();
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link onClick={handleClick}>
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-4 inset-y-2 " />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 
              rounded-md focus:outline-none"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        {/* right side */}
        <div className="flex relative items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full
                  ${currentUser ? "ring-2 ring-blue-500" : ""}`}
                  />
                </button>
                {/* show dropdowns */}
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white
                  shadow-lg rounded-md z-40"
                  >
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block px-4 py-2 w-full text-left text-sm hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>

          <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md">
            <HiOutlineShoppingCart className="" />
            <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
