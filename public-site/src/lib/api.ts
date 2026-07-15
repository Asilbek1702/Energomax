const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function authHeaders() {
  const token = localStorage.getItem("admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
      ...options.headers,
    },
  });
  if (res.status === 401) {
    localStorage.removeItem("admin_token");
    window.location.href = "/admin/login";
    throw new Error("Unauthorized");
  }
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).detail || "Request failed");
  if (res.status === 204) return null;
  return res.json();
}

export const login = (username: string, password: string) =>
  apiFetch("/api/auth/login", { method: "POST", body: JSON.stringify({ username, password }) });

export const getProductsAdmin = (category?: string) =>
  apiFetch(`/api/products/admin${category ? `?category=${category}` : ""}`);

export const getProduct = (id: string) => apiFetch(`/api/products/${id}`);

export const createProduct = (data: any) =>
  apiFetch("/api/products", { method: "POST", body: JSON.stringify(data) });

export const updateProduct = (id: string, data: any) =>
  apiFetch(`/api/products/${id}`, { method: "PUT", body: JSON.stringify(data) });

export const deleteProduct = (id: string) =>
  apiFetch(`/api/products/${id}`, { method: "DELETE" });

export async function uploadFile(file: File) {
  const form = new FormData();
  form.append("file", file);
  const token = localStorage.getItem("admin_token");
  const res = await fetch(`${API_URL}/api/upload`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: form,
  });
  if (!res.ok) throw new Error("Upload failed");
  return res.json();
}