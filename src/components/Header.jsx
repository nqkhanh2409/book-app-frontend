import { useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";

import avatarImg from "../assets/avatar.png";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

export default function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { currentUser, logoutUser } = useAuth();

  const handleLogoutUser = () => logoutUser();

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 sticky top-0 bg-gray-100/95 shadow rounded-b-md z-100">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to={"/"}>
            <HiBars3CenterLeft className="size-6" />
          </Link>

          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search here"
              className="bg-[#d4d4d4] w-full py-1 md:px-8 px-6 rounded-md"
            />
          </div>
        </div>

        {/* right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt="User Avatar"
                    className={`size-7 rounded-full cursor-pointer ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item, index) => (
                        <li key={index} onClick={() => setIsDropdownOpen(false)}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}

                      <li onClick={handleLogoutUser}>
                        <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to={"/login"}>
                <AiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link to={"/cart"} className="bg-primary p-1  sm:px-6 px-2 flex items-center rounded-sm">
            <IoCartOutline />
            <span className="text-sm font-semibold sm:ml-1">
              {cartItems.length > 0 ? cartItems.length : "0"}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
