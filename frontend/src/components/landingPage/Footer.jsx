import { useLocation } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

const Footer = () => {
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const scrollToSection = (id) => {
    if (location.pathname !== "/") return;
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubscribe = async () => {
    if (!email) return;

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await api.post("/subscribers", { email });

      if (res?.message) throw new Error(res.message);

      setMessage("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      setError(err.message || "Subscription failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="w-full">

      {/* CTA */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dxe17fztz/image/upload/v1769709215/footer-bg_fpplpg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Learn more about our listing process, as well as our additional
            staging and design work.
          </p>

          <button className="mt-6 bg-white text-blue-700 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* TOP FOOTER */}
      <div className="bg-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-white font-medium">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("clients")}>Clients</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-2 max-w-sm w-full">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="flex-1 px-4 py-2 rounded-md text-sm
                bg-transparent border border-white text-white
                placeholder-white/70 outline-none"
              />
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="bg-white text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition disabled:opacity-60"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </div>

            {error && (
              <p className="text-sm text-red-200">{error}</p>
            )}
            {message && (
              <p className="text-sm text-green-200">{message}</p>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">

          <p>© {new Date().getFullYear()} Powered by Real Trust</p>

          <p className="text-white font-semibold">Real Trust</p>

          <div className="flex gap-5 text-lg">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
