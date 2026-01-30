import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar({onClick}) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  const scrollToProjects = () => {
    if (location.pathname !== "/") return;
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToClients = () => {
    if (location.pathname !== "/") return;
    const section = document.getElementById("clients");
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:px-20">

          <div className="text-xl font-semibold text-gray-800">
            Real Trust
          </div>

          <div className="hidden md:flex items-center space-x-25 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              Home
            </NavLink>

            <button
              onClick={scrollToProjects}
              className="text-gray-700 hover:text-blue-500 transition"
            >
              Projects
            </button>

            <button
              onClick={scrollToClients}
              className="text-gray-700 hover:text-blue-500 transition"
            >
              Clients
            </button>

            <button
              onClick={()=>navigate("/admin")}
              className="text-gray-700 hover:text-blue-500 transition"
            >
              Admin Panel
            </button>

            <button
              onClick={onClick}
              className="bg-orange-500 text-white px-4 py-2 rounded text-center hover:bg-orange-600 transition"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-2xl font-semibold text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col space-y-4 px-4 py-4 font-medium">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-orange-500"
            >
              Home
            </NavLink>

            <button
              onClick={scrollToProjects}
              className="text-left text-gray-700 hover:text-orange-500"
            >
              Projects
            </button>

            <button
              onClick={scrollToClients}
              className="text-left text-gray-700 hover:text-orange-500"
            >
              Clients
            </button>

            <button
              onClick={onClick}
              className="bg-orange-500 text-white px-4 py-2 rounded text-center hover:bg-orange-600 transition"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
