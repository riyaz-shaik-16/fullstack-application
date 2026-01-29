import { Routes, Route } from "react-router-dom";
import { LandingPage, Clients, Contacts, Projects, Subscribers } from "./pages";
import AdminLayout from "./components/admin/AdminLayout"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="projects" element={<Projects />} />
        <Route path="clients" element={<Clients />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="subscribers" element={<Subscribers />} />
      </Route>
    </Routes>
  );
};

export default App;
