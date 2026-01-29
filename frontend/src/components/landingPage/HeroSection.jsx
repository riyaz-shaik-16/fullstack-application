import { useState } from "react";
import { api } from "../../services/api";

const HeroSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await api.post("/contacts", {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        city: form.city,
      });

      if (res?.message) throw new Error(res.message);

      setMessage("We’ll contact you shortly.");
      setForm({ name: "", email: "", mobile: "", city: "" });
    } catch (err) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const Form = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        type="text"
        placeholder="Full Name"
        required
        className="w-full bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        type="email"
        placeholder="Enter Email Address"
        required
        className="w-full bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <input
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        type="tel"
        placeholder="Mobile Number"
        required
        className="w-full bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <input
        name="city"
        value={form.city}
        onChange={handleChange}
        type="text"
        placeholder="Area, City"
        required
        className="w-full bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {error && (
        <div className="text-sm text-red-300 bg-red-900/30 px-3 py-2 rounded">
          {error}
        </div>
      )}

      {message && (
        <div className="text-sm text-green-300 bg-green-900/30 px-3 py-2 rounded">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Get Quick Quote"}
      </button>
    </form>
  );

  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dxe17fztz/image/upload/v1769709109/image_sqhxao.png')" }}
      >
        <div className="absolute inset-0 bg-black/25"></div>

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Consultation, <br /> Design & Marketing
            </h1>
          </div>

          <div className="ml-auto hidden md:block">
            <div className="w-88 p-6 rounded-xl bg-[#39399f]/85 backdrop-blur-sm border border-white/25 shadow-xl">
              <h3 className="text-white text-xl font-semibold text-center mb-6">
                Get a Free <br /> Consultation
              </h3>
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE FORM */}
      <div className="md:hidden px-4 py-8 bg-gray-50">
        <div className="max-w-md mx-auto p-6 rounded-xl bg-[#39399f]/90 border border-white/20 shadow-lg">
          <h3 className="text-white text-xl font-semibold text-center mb-6">
            Get a Free Consultation
          </h3>
          <Form />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
