# 🐾 Pokédex Next.js 15 – Pokémon Theme

## 🌟 Descripción
Pokédex temática Pokémon desarrollada con **Next.js 15**, **Tailwind CSS** y **Firebase Authentication**.  
Permite explorar Pokémon, ver detalles y autenticarse con Google.  

---

## 🚀 Funcionalidades

- **Login con Google** usando Firebase.  
- Vista principal con **diseño Pokémon** (colores rojo/amarillo, íconos de Pokéball).  
- **Lista de Pokémon** con paginación (ID y nombre).  
- **Detalle de Pokémon** con imagen oficial, tipos, estadísticas y habilidades.  
- Fondo temático suave, navbar y footer personalizados.  
- Manejo de errores y estado de carga al consumir la **PokeAPI**.  

---

## 📂 Estructura del Proyecto

```

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
├─ public/                    # Íconos y assets locales
├─ styles/
│  └─ globals.css             # Tailwind CSS
├─ next.config.js
├─ package.json
└─ README.md

````

---

## ⚡ Tecnologías

- **Next.js 15**  
- **TypeScript**  
- **Tailwind CSS**  
- **Firebase Authentication (Google Login)**  
- **PokeAPI**  

---

## 🔧 Instalación

1. Clonar repositorio:

```bash
git clone https://github.com/tu-usuario/AppPokemon.git
cd pokedex-nextjs
````

2. Instalar dependencias:

```bash
npm install
# o
yarn
```

3. Configurar Firebase (`src/lib/firebase.ts`):

```ts
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
```

4. Ejecutar aplicación:

```bash
npm run dev
# o
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000)

---

## 🎨 Diseño y Estilo

* Navbar y footer personalizados con colores Pokémon.
* Fondo suave con Pokéballs translúcidas.
* Tarjetas interactivas con hover.
* Completamente **responsive**.

---

## 🛠 Mejoras Futuras

* Guardar Pokémon favoritos de cada usuario.
* Implementar búsqueda de Pokémon.
* Animaciones tipo Pokémon al pasar el cursor.
* Sesión persistente de usuario.
* Internacionalización (español/inglés).

---

## 👨‍💻 Autor

**Joel Campoverde Gonzalez**

* Proyecto de demostración técnica de Frontend/Backend con Next.js y Firebase

