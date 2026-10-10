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
virtual_cv/
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

## 📬 Contacto

- **GitHub:** [leoneljfernandes](https://github.com/leoneljfernandes)
- **Email:** leo99.fernandes@gmail.com
