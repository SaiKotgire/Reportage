
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 max-w-md bg-white rounded-lg shadow-md">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <p className="mb-8 text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
