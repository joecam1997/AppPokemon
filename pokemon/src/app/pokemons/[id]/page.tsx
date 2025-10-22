"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type PokemonDetail = {
  id: number;
  name: string;
  sprites: { other: { ["official-artwork"]: { front_default: string } } };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  weight: number;
  height: number;
  stats: { stat: { name: string }; base_stat: number }[];
};

export default function PokemonDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error("Pokémon no encontrado");
        const json = await res.json();
        setPokemon(json);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) return <p className="text-center mt-6 text-slate-600">Cargando...</p>;
  if (error) return <p className="text-center mt-6 text-red-600">{error}</p>;
  if (!pokemon) return null;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-6">
      <Link
        href="/pokemons"
        className="inline-block mb-4 text-sm text-red-600 hover:underline"
      >
        ← Volver a la lista
      </Link>

      <div className="flex flex-col items-center text-center">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-48 h-48 object-contain"
        />
        <h2 className="text-3xl font-bold capitalize text-slate-700 mt-2">
          {pokemon.name}
        </h2>
        <p className="text-slate-500 mb-4">#{pokemon.id}</p>

        {/* Info general */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="px-4 py-1 bg-yellow-100 border border-yellow-300 rounded-full capitalize text-sm font-medium"
            >
              {t.type.name}
            </span>
          ))}
        </div>

        {/* Habilidades y stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full max-w-md">
          <div>
            <h3 className="font-semibold text-slate-700 mb-2">Habilidades</h3>
            <ul className="list-disc list-inside text-sm text-slate-600">
              {pokemon.abilities.map((a) => (
                <li key={a.ability.name}>{a.ability.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-700 mb-2">Estadísticas</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Peso: {pokemon.weight}</li>
              <li>Altura: {pokemon.height}</li>
              {pokemon.stats.slice(0, 3).map((s) => (
                <li key={s.stat.name}>
                  {s.stat.name}: {s.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
