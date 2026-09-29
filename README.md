# Strivox

Strivox es una aplicación web para un gimnasio, desarrollada como trabajo final del curso de Desarrollo Front-End de UTN. El proyecto fue creado originalmente con HTML y CSS y posteriormente migrado a React con Vite.

La aplicación presenta una página principal con información del gimnasio, planes de membresía y una galería de imágenes. También incluye una página de contacto con un formulario controlado, navegación con React Router y una página personalizada para rutas inexistentes.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- React Router DOM
- CSS
- Font Awesome

## Funcionalidades

- Página principal tipo One Page.
- Navbar y Footer reutilizables.
- Navegación interna hacia Inicio, Planes y Galería.
- Página independiente de Contacto.
- Planes generados dinámicamente mediante arrays y `map()`.
- Tarjetas reutilizables mediante props.
- Galería de imágenes generada dinámicamente.
- Formulario controlado con `useState`.
- Manejo de los eventos `change`, `submit` y reset.
- Validación básica mediante atributos HTML.
- Navegación con React Router.
- Layout compartido mediante `Outlet`.
- Página personalizada para el error 404.

## Instalación y ejecución

Para ejecutar el proyecto localmente es necesario tener instalados Node.js y npm.

1. Clonar o descargar este repositorio.
2. Ingresar desde la terminal a la carpeta del proyecto:

```bash
cd "Strivox Gym"
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección local indicada por Vite.

## Scripts disponibles

```bash
npm run dev
```

Inicia el servidor de desarrollo.


```

Permite previsualizar localmente la versión de producción.

## Estructura principal

```text
src/
|-- assets/       Recursos e imágenes
|-- components/   Componentes reutilizables
|-- pages/        Páginas y Layout de la aplicación
|-- styles/       Archivos CSS
|-- main.jsx      Configuración principal y rutas
```

## Rutas

| Ruta | Descripción |
| --- | --- |
| `/` | Página principal |
| `/contacto` | Página con el formulario de contacto |
| `*` | Página de error 404 |

## Estado del proyecto

El proyecto se encuentra en desarrollo como parte del trabajo práctico final del curso. Por el momento, el formulario funciona únicamente en el frontend y muestra la información en la consola del navegador; no está conectado a un servidor ni a una base de datos.
