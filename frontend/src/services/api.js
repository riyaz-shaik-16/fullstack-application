const API_BASE = import.meta.env.VITE_API_URL;

export const api = {
  get: async (url) => {
    const res = await fetch(`${API_BASE}${url}`);
    return res.json();
  },

  post: async (url, body, isFormData = false) => {
    const res = await fetch(`${API_BASE}${url}`, {
      method: "POST",
      body: isFormData ? body : JSON.stringify(body),
      headers: isFormData
        ? {}
        : { "Content-Type": "application/json" },
    });
    return res.json();
  },
};
