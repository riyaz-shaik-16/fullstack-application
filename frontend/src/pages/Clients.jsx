import { useEffect, useState } from "react";
import { api } from "../services/api";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    const data = await api.get("/clients");
    setClients(data);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("designation", form.designation);
    fd.append("description", form.description);
    fd.append("image", form.image);

    await api.post("/clients", fd, true);
    setForm({ name: "", designation: "", description: "", image: null });
    setLoading(false);
    fetchClients();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Clients
          </h1>
        </div>

        {/* Add Client Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6 max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-800">Add New Client</h2>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client Name
              </label>
              <input
                name="name"
                placeholder="Enter client name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Designation
              </label>
              <input
                name="designation"
                placeholder="e.g., CEO, Founder, Manager"
                value={form.designation}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Testimonial
              </label>
              <textarea
                name="description"
                placeholder="Share what the client says about your work"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client Photo
              </label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:font-medium hover:file:bg-blue-100 file:cursor-pointer cursor-pointer"
                required
              />
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Adding...
              </span>
            ) : (
              "Add Client"
            )}
          </button>
        </form>

        {/* Clients Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 pb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Client List</h2>
          </div>

          {clients.length === 0 ? (
            <div className="text-center py-16 px-8">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No clients yet</h3>
              <p className="text-gray-500">Add your first client testimonial to get started</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Photo
                    </th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Designation
                    </th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Testimonial
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {clients.map((c) => (
                    <tr key={c._id} className="hover:bg-gray-50">
                      <td className="px-8 py-4">
                        <img
                          src={c.image}
                          alt={c.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                        />
                      </td>
                      <td className="px-8 py-4">
                        <div className="font-semibold text-gray-900">{c.name}</div>
                      </td>
                      <td className="px-8 py-4">
                        <div className="text-gray-700">{c.designation}</div>
                      </td>
                      <td className="px-8 py-4">
                        <div className="text-gray-600 max-w-md line-clamp-2">
                          {c.description}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clients;