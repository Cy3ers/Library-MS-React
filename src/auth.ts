// ./auth.ts

interface User {
  username: string;
  role: 'admin' | 'user';
}

let currentUser: User | null = null;

export const login = (username: string, password: string): User | null => {
  // Dummy authentication logic
  if (username === 'admin' && password === 'admin') {
    currentUser = { username, role: 'admin' };
  } else if (username === 'user' && password === 'user') {
    currentUser = { username, role: 'user' };
  } else {
    return null;
  }
  return currentUser;
};

export const isAuthenticated = (): boolean => {
  return currentUser !== null;
};

export const getUser = (): User | null => {
  return currentUser;
};

export const logout = (): void => {
  currentUser = null;
  window.location.reload();
};
