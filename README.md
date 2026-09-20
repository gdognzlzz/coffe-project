# Almán La Finca — Café de Altura

Landing page de "Almán La Finca", una cafetería en Pachuca de Soto, Hgo., construida con React y Vite. Incluye animación de scroll (relleno de la taza), galería con lightbox, acordeón de menú, carrito de pedido anticipado con envío por WhatsApp y sección de ubicación/horarios.

## Stack

- [React 19](https://react.dev/) con componentes funcionales y hooks (`useState`, `useEffect`, `useRef`, `useMemo`)
- [Vite](https://vite.dev/) como bundler y servidor de desarrollo
- [oxlint](https://oxc.rs/) para linting

## Requisitos

- Node.js 18+

## Instalación

```bash
npm install
```

## Scripts disponibles

| Comando           | Descripción                                        |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR             |
| `npm run build`   | Genera la build de producción en `dist/`             |
| `npm run preview` | Sirve localmente la build de producción              |
| `npm run lint`    | Ejecuta oxlint sobre el proyecto                     |

## Estructura del proyecto

```
index.html          # Punto de entrada HTML, fuentes de Google Fonts
src/
  main.jsx          # Punto de entrada de React
  App.jsx           # Componente principal con todas las secciones de la página
  App.css            # Estilos específicos de las secciones
  index.css          # Reset global, variables CSS y tipografías
  assets/            # Imágenes del sitio (imagen-1.jpeg … imagen-9.jpeg)
public/              # Archivos estáticos (favicon, etc.)
```

## Personalización

- **Menú y precios**: editar el arreglo `menuData` en [src/App.jsx](src/App.jsx).
- **Galería**: editar `galleryItems` en [src/App.jsx](src/App.jsx).
- **Datos de contacto/ubicación**: editar `locationBadges` y el bloque de la sección `ubicacion` en [src/App.jsx](src/App.jsx).
- **Número de WhatsApp**: variable dentro de la función `sendOrder` en [src/App.jsx](src/App.jsx).
- **Colores y tipografías**: variables CSS (`--cream`, `--wood`, `--gold`, etc.) en [src/index.css](src/index.css).
