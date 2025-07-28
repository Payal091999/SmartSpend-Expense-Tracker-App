import { Outlet, Link } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow">
        <h1 className="text-xl font-bold">SmartSpend</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
          <Link to="/feedback" className="text-blue-600 hover:underline">Feedback</Link>
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-4 border-t text-gray-500">
        &copy; {new Date().getFullYear()} SmartSpend. All rights reserved.
      </footer>
    </div>
  );
};

export default PublicLayout;
