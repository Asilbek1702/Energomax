const TOKEN_KEY = "admin_token";

export function getAdminToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setAdminToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function logoutAdmin(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAdminAuthed(): boolean {
  return !!getAdminToken();
}
