
const API_BASE = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5195"
).replace(/\/+$/, "");

export const token = () => sessionStorage.getItem("disa_token");

export const setSession = (value, role) => {
  sessionStorage.setItem("disa_token", value);
  sessionStorage.setItem("disa_role", role);
};

export const logout = () => {
  sessionStorage.removeItem("disa_token");
  sessionStorage.removeItem("disa_role");
};

export async function api(
  path,
  { method = "GET", body, auth = true } = {}
) {
  const headers = {};

  if (auth && token()) {
    headers.Authorization = `Bearer ${token()}`;
  }

  if (body !== undefined && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body:
      body === undefined
        ? undefined
        : body instanceof FormData
          ? body
          : JSON.stringify(body),
  });

  const raw = await response.text();

  let data;

  try {
    data = raw ? JSON.parse(raw) : null;
  } catch {
    data = raw;
  }

  if (!response.ok) {
    const message =
      typeof data === "string"
        ? data
        : data?.message ||
          Object.values(data?.errors || {}).flat().join("; ") ||
          data?.title ||
          `HTTP ${response.status}`;

    const error = new Error(message);
    error.status = response.status;
    error.details = data;

    throw error;
  }

  return data;
}

export const imageUrl = (path) =>
  path?.startsWith("http")
    ? path
    : `${API_BASE}${path || ""}`;
