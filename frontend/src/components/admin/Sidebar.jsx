import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Projects", to: "/admin/projects", icon: "fa-solid fa-folder-open" },
  { name: "Clients", to: "/admin/clients", icon: "fa-solid fa-users" },
  { name: "Contacts", to: "/admin/contacts", icon: "fa-solid fa-envelope" },
  { name: "Subscribers", to: "/admin/subscribers", icon: "fa-solid fa-bell" },
  { name: "Home", to: "/", icon: "fa-solid fa-house" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between bg-white border-b px-4 h-14">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-table-columns text-gray-700"></i>
          <h2 className="text-lg font-semibold">Admin Panel</h2>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="text-2xl font-semibold"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-8 hidden lg:flex">
            <i className="fa-solid fa-table-columns text-gray-700"></i>
            <h2 className="text-xl font-semibold">Admin Panel</h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-xl"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  flex items-center gap-3 px-3 py-2 rounded font-medium transition
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  }
                `
                }
              >
                {({ isActive }) => (
                  <>
                    <i className={`${link.icon} ${isActive ? "text-blue-600" : "text-gray-500"}`}></i>
                    <span>{link.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;