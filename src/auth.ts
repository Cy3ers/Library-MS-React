// ./auth.ts

interface User {
  username: string;
  password?: string;
  role: "admin" | "user";
}

let currentUser: User | null = null;

const getUsersFromLocalStorage = (): User[] => {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : [];
};

export const login = (username: string, password: string): User | null => {
  // Dummy authentication logic
  if (username === "admin" && password === "admin") {
    currentUser = { username, role: "admin" };
    return currentUser;
  }

  const users = getUsersFromLocalStorage();
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    currentUser = user;
    return currentUser;
  }

  return null;
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
