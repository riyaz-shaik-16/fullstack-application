const Form = ({
  form,
  loading,
  error,
  message,
  onChange,
  onSubmit,
  formRef
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        ref={formRef}
        name="name"
        value={form.name}
        onChange={onChange}
        type="text"
        placeholder="Full Name"
        required
        className="w-full bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white"
      />

      <input
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        placeholder="Enter Email Address"
        required
        className="w-full bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white"
      />

      <input
        name="mobile"
        value={form.mobile}
        onChange={onChange}
        type="tel"
        placeholder="Mobile Number"
        required
        className="w-full bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white"
      />

      <input
        name="city"
        value={form.city}
        onChange={onChange}
        type="text"
        placeholder="Area, City"
        required
        className="w-full bg-white/10 border border-white/30 rounded-md px-4 py-2 text-white"
      />

      {error && <p className="text-red-300">{error}</p>}
      {message && <p className="text-green-300">{message}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 py-2 rounded"
      >
        {loading ? "Submitting..." : "Get Quick Quote"}
      </button>
    </form>
  );
};

export default Form;
