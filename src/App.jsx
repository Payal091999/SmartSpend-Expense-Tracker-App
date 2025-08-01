import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";   // Shared layout for public pages
import Layout from "./layout/Layout";               // Shared layout for dashboard (authenticated) pages

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import AuthForm from "./components/AuthForm"; // AuthForm handles both login and registration


// Dashboard Pages
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import './components/Logo.css';
import './index.css'; // Tailwind core
import './styles/global.css'; // base styles


function App() {
  return (
    <Routes>

      {/* ✅ Public Pages using PublicLayout */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm />} />
      </Route>

      {/* ✅ Dashboard Pages using Layout */}
      <Route path="/app" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="budgets" element={<Budgets />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />

        {/* ✅ Public Pages also accessible inside dashboard layout */}
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="login" element={<AuthForm />} />
        <Route path="register" element={<AuthForm />} />
      </Route>

    </Routes>
  );
}

export default App;
