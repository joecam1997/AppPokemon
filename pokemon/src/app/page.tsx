import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-yellow-100 via-red-50 to-white">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start max-w-5xl mx-auto">
        {/* Logo Pokémon */}
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="Pokédex logo"
          width={100}
          height={100}
        />

        <h1 className="text-4xl sm:text-5xl font-bold text-red-600 tracking-wide text-center sm:text-left">
          Bienvenido a tu Pokédex
        </h1>
        <p className="text-lg text-gray-700 text-center sm:text-left">
          Explora todos los Pokémon, descubre sus tipos, habilidades y estadísticas base. ¡Empieza tu aventura hoy!
        </p>

        {/* Botón de Login */}
        <Link
          href="/login"
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors text-lg"
        >
          Iniciar Sesión
        </Link>

        {/* Sección Características */}
        <section className="w-full mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-yellow-100 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png"
              alt="Tipo Pokémon"
              width={60}
              height={60}
            />
            <h3 className="mt-4 font-bold text-lg text-red-600">Tipos</h3>
            <p className="mt-2 text-gray-700">Descubre los distintos tipos de Pokémon: Fuego, Agua, Planta, Eléctrico y más.</p>
          </div>

          <div className="bg-yellow-100 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/berry.png"
              alt="Habilidades"
              width={60}
              height={60}
            />
            <h3 className="mt-4 font-bold text-lg text-red-600">Habilidades</h3>
            <p className="mt-2 text-gray-700">Aprende las habilidades únicas de cada Pokémon y cómo aprovecharlas en batalla.</p>
          </div>

          <div className="bg-yellow-100 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
              alt="Estadísticas"
              width={60}
              height={60}
            />
            <h3 className="mt-4 font-bold text-lg text-red-600">Estadísticas</h3>
            <p className="mt-2 text-gray-700">Consulta estadísticas base como HP, Ataque, Defensa y más para cada Pokémon.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600">
        <span>© 2025 Pokédex Next.js</span>
        <span>Desarrollado con ❤️ y Tailwind CSS</span>
      </footer>
    </div>
  );
}
