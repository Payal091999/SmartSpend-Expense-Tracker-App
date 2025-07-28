const API_BASE_URL = 'http://localhost:5000/api';

// 🔐 Check if user is authenticated
const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

// 🔐 Login Function
const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    // ✅ Save auth token and user
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    // ✅ Redirect to dashboard
    window.location.href = '/app';
    return data;
  } catch (error) {
    console.error('Login Error:', error);
    alert(error.message || 'Login failed.');
    throw error;
  }
};

// 📝 Register Function
const register = async ({ name, email, password }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    // Auto-login after successful registration
    await login(email, password);
    return data;
  } catch (error) {
    console.error('Registration Error:', error);
    alert(error.message || 'Registration failed.');
    throw error;
  }
};

// 🚪 Logout Function
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/';
};

// 👤 Get Current User
const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// 🔒 Redirect to login if not authenticated
const requireAuth = () => {
  if (!isAuthenticated() && !window.location.pathname.includes('/login')) {
    window.location.href = '/login';
  }
};

// 🔄 Redirect to dashboard if already authenticated
const redirectIfAuthenticated = () => {
  if (isAuthenticated() &&
      (window.location.pathname === '/' ||
       window.location.pathname.includes('/login') ||
       window.location.pathname.includes('/register'))) {
    window.location.href = '/app';
  }
};

export {
  isAuthenticated,
  login,
  register,
  logout,
  getCurrentUser,
  requireAuth,
  redirectIfAuthenticated,
};
