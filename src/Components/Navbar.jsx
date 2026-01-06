import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-center space-x-8">
      <Link to="/" className="hover:text-gray-200">Home</Link>
      <Link to="/projects" className="hover:text-gray-200">Projects</Link>
      <Link to="/about" className="hover:text-gray-200">About</Link>
    </nav>
  );
}
