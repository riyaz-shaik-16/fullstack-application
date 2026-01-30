import { useState } from "react";
import { api } from "../../services/api";
import Form from "./Form";

const HeroSection = ({ formRef }) => {
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

  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dxe17fztz/image/upload/v1769709109/image_sqhxao.png')",
        }}
        id="hero"
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
              <Form
                form={form}
                loading={loading}
                error={error}
                message={message}
                onChange={handleChange}
                onSubmit={handleSubmit}
                formRef={formRef}
              />
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
          <Form
            form={form}
            loading={loading}
            error={error}
            message={message}
            onChange={handleChange}
            onSubmit={handleSubmit}
            formRef={formRef}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
