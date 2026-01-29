import { useEffect, useState } from "react";
import { api } from "../services/api";

const Subscribers = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    api.get("/subscribers").then(setSubs);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Subscribers
          </h1>
        </div>

        {/* Subscribers Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8 pb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Subscriber List</h2>
          </div>

          {subs.length === 0 ? (
            <div className="text-center py-16 px-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No subscribers yet</h3>
              <p className="text-gray-500">Newsletter subscriptions will appear here</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Subscribed At
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {subs.map((s) => (
                    <tr key={s._id} className="hover:bg-gray-50">
                      <td className="px-8 py-4">
                        <div className="font-semibold text-gray-900">{s.email}</div>
                      </td>
                      <td className="px-8 py-4">
                        <div className="text-gray-700">
                          {new Date(s.createdAt).toLocaleString()}
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

export default Subscribers;