"use client";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";

export default function Navbar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <header className="bg-red-600 text-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="Pokédex"
            className="w-8 h-8"
          />
          <Link href="/" className="text-lg font-bold tracking-wide">
            Pokédex
          </Link>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          {user && (
            <Link href="/pokemons" className="hover:text-yellow-200 transition">
              Lista
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-3">
              <img
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-yellow-300"
              />
              <span className="text-yellow-100 font-medium hidden sm:block">
                {user.displayName?.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="ml-2 bg-yellow-400 hover:bg-yellow-500 text-red-700 font-semibold py-1 px-3 rounded-full text-sm transition"
              >
                Salir
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-yellow-400 hover:bg-yellow-500 text-red-800 font-semibold py-1 px-3 rounded-full text-sm transition"
            >
              Iniciar Sesión
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
