# Leonel Julián Fernandes - Web Portfolio & CV

Este repositorio contiene el código fuente de mi **Portfolio Personal y Currículum Vitae Interactivo**. Ha sido diseñado buscando un enfoque moderno, responsivo y de alto rendimiento, empleando las mejores prácticas de la industria y un sistema de diseño minimalista y monocromático inspirado en la estética de Vercel.

## 🚀 Características Principales

* **Fondo de Galaxia Interactivo:** Un motor de física construido en **Canvas 2D puro** (sin dependencias). En modo oscuro muestra un espacio profundo con estrellas blancas, y en modo claro un efecto entintado. Responde al puntero con un efecto de paralaje (*parallax*) suave y física de colisión, todo a 60 FPS.
* **Diseño Minimalista y Glassmorphism:** Inspirado en la estética de Vercel. Uso intensivo de escalas de monocromo, fuentes modernas (Geist Sans) y tarjetas translúcidas de cristal pulido (`.glass`) que permiten ver las estrellas moverse de fondo.
* **Internacionalización (i18n):** Soporte completo para Inglés y Español de manera dinámica usando `react-i18next`.
* **Rendimiento:** Desarrollado sobre la arquitectura de **Vite**, garantizando tiempos de carga y recarga ultrarrápidos.
* **Animaciones:** Transiciones y animaciones en cascada para la aparición de elementos usando `framer-motion`.
* **Diseño Responsivo:** Completamente adaptable a dispositivos móviles, tablets y monitores de escritorio.

## 🛠️ Tecnologías Utilizadas

* **Framework:** React 19 con TypeScript
* **Build Tool:** Vite 6
* **Estilos:** Tailwind CSS v4
* **Tipografía:** @fontsource/geist-sans
* **Íconos:** `lucide-react` y `react-icons`
* **Traducciones:** `i18next` & `react-i18next`
* **Animaciones:** `framer-motion`

## 📂 Estructura del Proyecto

```
myPersonalWeb/
├── .skills/               # Reglas y especificaciones de diseño utilizadas
├── public/                # Archivos estáticos
├── src/
│   ├── components/        # Componentes UI (Hero, Profile, Skills, Experience, Education, Projects)
│   │   └── galaxy/        # Lógica y estilos del motor gráfico del fondo interactivo (Canvas 2D)
│   ├── i18n.ts            # Configuración y diccionario de traducciones (ES/EN)
│   ├── index.css          # Estilos globales y configuración de Tailwind CSS
│   ├── main.tsx           # Punto de entrada de React
│   └── App.tsx            # Contenedor principal de la Single Page Application (SPA)
├── postcss.config.js      # Configuración de PostCSS requerida por Tailwind v4
├── package.json           # Dependencias y scripts
└── README.md              # Este archivo
```

## ⚙️ Cómo ejecutar el proyecto localmente

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/leoneljfernandes/mi-portfolio.git
   cd mi-portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El servidor se levantará (usualmente en `http://localhost:5173`) y cualquier cambio en el código se reflejará instantáneamente.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Esto generará una carpeta `dist` lista para ser desplegada en Vercel, Netlify o cualquier servidor estático.

## 📬 Contacto

Siéntete libre de revisar mi perfil y repositorios:
- **GitHub:** [leoneljfernandes](https://github.com/leoneljfernandes)
- **Email:** autosalerno.taller@gmail.com
