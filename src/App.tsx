import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-red-500">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex space-x-8">
          <Link to="/" className="text-gray-900  hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-900 hover:text-blue-600">
            About
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
