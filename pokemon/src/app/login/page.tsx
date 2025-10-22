"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/pokemons");
    } catch (error) {
      console.error(error);
      alert("No se pudo iniciar sesión con Google 😔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 to-red-100">
      <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg max-w-sm w-full text-center border border-red-100">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Pokédex Logo"
          className="w-16 h-16 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-red-600 mb-3">¡Entrenador Pokémon!</h1>
        <p className="text-gray-600 mb-6">
          Inicia sesión para acceder a tu Pokédex personalizada
        </p>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex items-center justify-center gap-3 w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
        >
          {loading ? (
            "Cargando..."
          ) : (
            <>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Iniciar sesión con Google
            </>
          )}
        </button>
      </div>
    </div>
  );
}
