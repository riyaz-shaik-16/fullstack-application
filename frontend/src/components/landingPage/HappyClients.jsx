import { useEffect, useState } from "react";
import { api } from "../../services/api"; // adjust path if needed

const HappyClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    try {
      const data = await api.get("/clients");
      setClients(data);
    } catch (err) {
      console.error("Failed to fetch clients", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <section id="clients" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-blue-700">
            Happy Clients
          </h2>
        </div>

        {loading ? (
          <div className="text-center text-gray-500">
            Loading clients...
          </div>
        ) : clients.length === 0 ? (
          <div className="text-center text-gray-500">
            No clients found.
          </div>
        ) : (
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {clients.map((client) => (
              <div
                key={client._id}
                className="relative bg-white rounded-lg shadow-md px-6 pt-12 pb-6 text-center hover:shadow-lg transition"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover shadow"
                  />
                </div>

                <p className="text-sm text-left text-gray-600">
                  {client.description}
                </p>

                <h4 className="mt-4 text-left font-semibold text-blue-700">
                  {client.name}
                </h4>

                <p className="text-xs text-left text-gray-500">
                  {client.designation}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default HappyClients;
