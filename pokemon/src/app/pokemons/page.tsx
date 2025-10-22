"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

type Pokemon = { id: number; name: string; image: string | null };

function extractId(url: string) {
  const m = url.match(/\/([0-9]+)\/?$/);
  return m ? parseInt(m[1]) : 0;
}

export default function PokemonListPage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loader = useRef<HTMLDivElement | null>(null);

  const PAGE_SIZE = 20;
  const TOTAL = 100;

  async function fetchPokemons(p: number) {
    setLoading(true);
    setError(null);
    try {
      const offset = (p - 1) * PAGE_SIZE;
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=${offset}`
      );
      if (!res.ok) throw new Error("Error al obtener datos");
      const json = await res.json();
      const data: Pokemon[] = json.results.map((it: any) => ({
        id: extractId(it.url),
        name: it.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${extractId(it.url)}.png`,
      }));
      setPokemons((prev) => [...prev, ...data]);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemons(1);
  }, []);

  useEffect(() => {
    const el = loader.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        const nextPage = page + 1;
        const maxPage = Math.ceil(TOTAL / PAGE_SIZE);
        if (nextPage <= maxPage) {
          setPage(nextPage);
          fetchPokemons(nextPage);
        }
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [page, loading]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Lista de Pokémon</h2>
      {error && <div className="text-red-700 mb-4">{error}</div>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl">
        {pokemons.map((p) => (
          <Link
            key={p.id}
            href={`/pokemons/${p.id}`}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 flex flex-col items-center transform hover:-translate-y-1 transition"
          >
            {p.image ? (
              <img src={p.image} alt={p.name} className="w-24 h-24 object-contain" />
            ) : (
              <div className="w-24 h-24 bg-slate-200 rounded" />
            )}
            <p className="text-slate-500 text-sm mt-1">#{p.id}</p>
            <h3 className="capitalize font-semibold text-slate-700">{p.name}</h3>
          </Link>
        ))}
      </div>

      {loading && <p className="mt-6 text-slate-600">Cargando más Pokémon...</p>}
      <div ref={loader} className="h-10"></div>
    </div>
  );
}
