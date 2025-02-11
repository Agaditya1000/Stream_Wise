import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Film, Search as SearchIcon, BookmarkCheck, LogIn, UserPlus } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
          <Film className="h-6 w-6" />
          <span>StreamWise</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm ${
              location.pathname === "/" ? "text-blue-500" : "text-gray-400 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/search"
            className={`text-sm ${
              location.pathname === "/search" ? "text-blue-500" : "text-gray-400 hover:text-white"
            }`}
          >
            <SearchIcon className="h-5 w-5" />
          </Link>
          <Link
            to="/watchlist"
            className={`text-sm ${
              location.pathname === "/watchlist" ? "text-blue-500" : "text-gray-400 hover:text-white"
            }`}
          >
            <BookmarkCheck className="h-5 w-5" />
          </Link>

          {/* Login & Signup Links */}
          <Link
            to="/login"
            className={`flex items-center gap-1 text-sm ${
              location.pathname === "/login" ? "text-blue-500" : "text-gray-400 hover:text-white"
            }`}
          >
            <LogIn className="h-5 w-5" />
            <span>Login</span>
          </Link>
          <Link
            to="/signup"
            className={`flex items-center gap-1 text-sm ${
              location.pathname === "/signup" ? "text-blue-500" : "text-gray-400 hover:text-white"
            }`}
          >
            <UserPlus className="h-5 w-5" />
            <span>Signup</span>
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
