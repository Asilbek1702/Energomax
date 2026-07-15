export function isAdminAuthed() {
  return !!localStorage.getItem("admin_token");
}

export function setAdminToken(token: string) {
  localStorage.setItem("admin_token", token);
}

export function logoutAdmin() {
  localStorage.removeItem("admin_token");
}