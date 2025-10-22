Pokédex Next.js 15 – Pokémon Theme

Una aplicación web temática Pokémon desarrollada con Next.js 15, Tailwind CSS y Firebase Authentication. Permite explorar Pokémon, ver detalles, y autenticarse con Google.

📌 Descripción

Esta Pokédex es un proyecto técnico que simula un catálogo completo de Pokémon. El objetivo es mostrar habilidades en Next.js, TypeScript, Tailwind CSS, Firebase Auth, y consumo de APIs externas (PokeAPI).

Características principales:

Diseño responsive y atractivo con temática Pokémon.

Login y logout con Google usando Firebase Authentication.

Vista de lista de Pokémon con paginación.

Vista de detalle de Pokémon mostrando imagen, tipos, habilidades y estadísticas.

Fondo temático suave, navbar y footer personalizados.

Manejo de errores y estado de carga al consumir la API.

📂 Estructura del Proyecto
pokédex-nextjs/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx          # Layout principal con fondo, navbar y footer
│  │  ├─ page.tsx            # Página de inicio temática Pokémon
│  │  ├─ pokemons/
│  │  │  ├─ page.tsx         # Vista lista de Pokémon
│  │  │  └─ [id]/page.tsx    # Vista detalle de Pokémon
│  ├─ components/
│  │  └─ Navbar.tsx           # Navbar con login/logout
│  ├─ hooks/
│  │  └─ useAuth.ts           # Hook personalizado para autenticación
│  ├─ lib/
│  │  └─ firebase.ts          # Configuración de Firebase
├─ public/                    # Íconos, imágenes locales
├─ styles/
│  └─ globals.css             # Tailwind CSS y estilos globales
├─ next.config.js
├─ package.json
└─ README.md

⚡ Tecnologías

Next.js 15 – Framework React moderno con soporte App Router.

TypeScript – Tipado estático para mayor seguridad.

Tailwind CSS – Estilos modernos y responsive.

Firebase Authentication – Login con Google.

PokeAPI – API para obtener información de Pokémon.

🎨 Funcionalidades
1. Login con Google

Autenticación vía Firebase.

Muestra foto y nombre del usuario logueado.

Botón de logout que redirige a la página principal.

2. Página principal

Diseño Pokémon: colores rojo y amarillo, íconos de Pokéball, berries y pociones.

Sección “Características” mostrando tipos, habilidades y estadísticas de los Pokémon.

Botón grande de login para acceder a la lista de Pokémon.

3. Lista de Pokémon

Muestra los primeros 100 Pokémon (ID y nombre).

Paginación tradicional o scroll infinito.

Diseño responsive con tarjetas limpias.

4. Detalle de Pokémon

Imagen oficial del Pokémon centrada.

Tipos, estadísticas y habilidades base.

Diseño centrado y scrollable si la pantalla es pequeña.

🔧 Instalación

Clonar el repositorio

git clone https://github.com/tu-usuario/AppPokemon.git
cd pokedex-nextjs


Instalar dependencias

npm install
# o
yarn


Configurar Firebase

Crear un proyecto en Firebase
.

Habilitar Authentication > Google.

Copiar la configuración de Firebase (apiKey, authDomain, etc.) en src/lib/firebase.ts.

// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


Ejecutar la aplicación

npm run dev
# o
yarn dev


Abre http://localhost:3000
 en tu navegador.

📱 Diseño y Estilo

Navbar y footer personalizados con colores y logos Pokémon.

Fondo suave tipo Pokémon con Pokéballs translúcidas.

Tarjetas interactivas con sombras y hover.

Completamente responsive para móviles y escritorio.

🔗 Enlaces importantes

PokeAPI
 – API usada para obtener información de Pokémon.

Firebase Authentication
 – Login con Google.

Tailwind CSS
 – Framework de estilos.

Next.js 15
 – Framework principal.

🛠 Mejoras Futuras

Guardar los Pokémon favoritos de cada usuario.

Implementar búsqueda en la lista de Pokémon.

Animaciones tipo “Pokémon” al pasar el cursor sobre tarjetas.

Guardar sesión del usuario persistente para que no tenga que loguearse siempre.

Internacionalización (i18n) para español/inglés.

🎯 Autor

Joel Campoverde Gonzalez

Estudiante / Desarrollador Frontend & Backend

GitHub: https://github.com/tu-usuario
