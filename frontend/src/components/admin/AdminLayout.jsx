import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <main className="lg:ml-64 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;