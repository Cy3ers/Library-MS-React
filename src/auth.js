// ./Auth.js

let currentUser = null;

export const login = (username, password) => {
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

export const isAuthenticated = () => {
  return currentUser !== null;
};

export const getUser = () => {
  return currentUser;
};

export const logout = () => {
  currentUser = null;
  window.location.reload();
};
