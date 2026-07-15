const API_URL = import.meta.env.VITE_API_URL || "";

function authHeaders(): Record<string, string> {
  const token = localStorage.getItem("admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function resolveMediaUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${API_URL}${url}`;
}

export async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const headers: Record<string, string> = {
    ...authHeaders(),
    ...(options.headers as Record<string, string>),
  };

  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${API_URL}${path}`, { ...options, headers });

  if (res.status === 401) {
    localStorage.removeItem("admin_token");
    window.location.href = "/admin/login";
    throw new Error("Unauthorized");
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || "Ошибка запроса");
  }

  if (res.status === 204) return null as T;
  return res.json();
}

export const login = (username: string, password: string) =>
  apiFetch<{ access_token: string }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

export const getProducts = (params?: { category?: string; page?: number }) => {
  const q = new URLSearchParams();
  if (params?.category) q.set("category", params.category);
  if (params?.page) q.set("page", String(params.page));
  const qs = q.toString();
  return apiFetch<import("@/types/product").ProductListResponse>(
    `/api/products${qs ? `?${qs}` : ""}`,
  );
};

export const getProductsAdmin = (params?: { category?: string; page?: number }) => {
  const q = new URLSearchParams();
  if (params?.category) q.set("category", params.category);
  if (params?.page) q.set("page", String(params.page));
  const qs = q.toString();
  return apiFetch<import("@/types/product").ProductListResponse>(
    `/api/products/admin${qs ? `?${qs}` : ""}`,
  );
};

export const getProduct = (id: string) =>
  apiFetch<import("@/types/product").Product>(`/api/products/${id}`);

export const createProduct = (data: import("@/types/product").ProductFormData) =>
  apiFetch<import("@/types/product").Product>("/api/products", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateProduct = (
  id: string,
  data: Partial<import("@/types/product").ProductFormData>,
) =>
  apiFetch<import("@/types/product").Product>(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteProduct = (id: string) =>
  apiFetch<void>(`/api/products/${id}`, { method: "DELETE" });

export async function uploadFile(file: File) {
  const form = new FormData();
  form.append("file", file);
  const token = localStorage.getItem("admin_token");
  const res = await fetch(`${API_URL}/api/upload`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: form,
  });
  if (!res.ok) throw new Error("Ошибка загрузки файла");
  return res.json() as Promise<{ url: string }>;
}
