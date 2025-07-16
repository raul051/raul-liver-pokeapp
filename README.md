# Pokédex Liverpool - Proyecto React

Aplicación web desarrollada con React y Firebase Authentication para consultar la Pokédex y ver detalles de cada Pokémon.

---

## Requisitos previos

- Node.js >= 16.x
- npm >= 9.x
- Tener configurado un proyecto de Firebase si deseas usar el login

---

## Pasos para levantar el proyecto en local

### 1️⃣ Clonar el repositorio

```bash
 git clone https://github.com/raul051/raul-liver-pokeapp.git
 cd raul-liver-pokeapp
```

### 2️⃣ Instalar dependencias

```bash
 npm install
```

### 3️⃣ Configurar Firebase Authentication

- Crea un archivo `src/firebaseConfig.js` con tus credenciales de Firebase.
- Configura en Firebase Authentication el método Email/Password.

### 4️⃣ Levantar el servidor de desarrollo

```bash
 npm start
```

La aplicación estará disponible en:

[http://localhost:3000](http://localhost:3000)

---

## Scripts disponibles

- `npm start` → Levanta el proyecto en modo desarrollo.
- `npm run build` → Genera la carpeta `/build` lista para producción.
- `firebase deploy` → Sube el proyecto a Firebase Hosting (requiere configuración previa).

---

## Estructura del proyecto

- `/src/components` → Componentes reutilizables.
- `/src/pages` → Páginas principales como Login, Registro, Home.
- `/src/context` → Contexto de autenticación.
- `/src/features` → Funcionalidades de Pokédex.
- `/public` → Archivos estáticos.

---

**URL:** https://prueba-frontend-d9730.web.app/login

**Licencia:** MIT
