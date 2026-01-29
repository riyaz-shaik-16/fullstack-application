import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Projects", to: "/admin/projects" },
  { name: "Clients", to: "/admin/clients" },
  { name: "Contacts", to: "/admin/contacts" },
  { name: "Subscribers", to: "/admin/subscribers" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between bg-white border-b px-4 h-14">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        <button
          onClick={() => setOpen(true)}
          className="text-2xl font-semibold"
        >
          ☰
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
          fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="p-6 h-full flex flex-col">
          <h2 className="text-xl font-semibold mb-8 hidden lg:block">
            Admin Panel
          </h2>

          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  px-3 py-2 rounded font-medium transition
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  }
                `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
