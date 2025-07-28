import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-6">SmartSpend</h2>
      <Link to="/" className="hover:text-green-400">Dashboard</Link>
      <Link to="/transactions" className="hover:text-green-400">Transactions</Link>
      <Link to="/budgets" className="hover:text-green-400">Budgets</Link>
      <Link to="/reports" className="hover:text-green-400">Reports</Link>
      <Link to="/settings" className="hover:text-green-400">Settings</Link>
      <Link to="/login" className="hover:text-green-400 mt-auto">Logout</Link>
    </div>
  );
};

export default Sidebar;
