# 🌌 Rick and Morty Multiverse 

Esta es una **Single Page Application (SPA)** de alto rendimiento construida con **React** y **Vite**. El proyecto consume la [Rick and Morty API](https://rickandmortyapi.com/) para ofrecer una experiencia visualmente moderna.

> **Desarrollado por:** Miguel Angel Buitron Becerra

---

## Estética y Diseño
La aplicación cuenta con una identidad visual única inspirada en la ciencia ficción y el multiverso:
- **Neon Aesthetic:** Paleta de colores basada en Azul Eléctrico y Verde Portal Neón.
- **Tipografías Sci-Fi:** Uso de `Creepster` para títulos psicodélicos y `Orbitron` para interfaces futuristas.
- **Passport Detail:** Los detalles de los personajes se presentan como una tarjeta de identificación interdimensional.
- **Efectos Glow:** Resplandores dinámicos y sombras neón en todos los elementos interactivos.

---

## Funcionalidades Principales

### Visualización y Navegación
- **Exploración Total:** Listado completo de personajes con imágenes y datos clave.
- **Navegación Fluida:** Implementación de `react-router-dom` para transiciones sin recarga de página.
- **Paginación Inteligente:** Navegación por bloques de 20 personajes para optimizar el rendimiento.

### Búsqueda y Filtrado
- **Buscador en Tiempo Real:** Filtra personajes por nombre instantáneamente desde la Home.
- **Filtro por Especie:** Sección dedicada para segmentar por Humano, Alien, Robot y Criaturas Mitológicas.

### Detalle de Personaje
- **Ficha Técnica:** Información exhaustiva (Estado, Origen, Locación, Episodios, etc.).
- **Navegación Secuencial:** Botones "Anterior" y "Siguiente" dentro de la vista de detalle para una navegación continua.

### Robustez
- **Manejo de Errores Avanzado:** Página 404 personalizada ("Wubba Lubba Dub Dub!") y componente reutilizable `ErrorMessage` para fallos de red o datos no encontrados.
- **Lógica de Errores Especializada:** Implementación de restricciones de acceso por especie (ej. las Criaturas Mitológicas disparan un error visual controlado para demostrar el manejo de estados).
- **Estados de Carga:** Spinner animado con estilo neón.
- **Responsividad:** Adaptado 100% a PC, Tablets y Móviles.

---

## Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **React 18** | Biblioteca principal de UI |
| **Vite** | Herramienta de construcción (Build tool) |
| **React Router 6** | Gestión de rutas dinámicas |
| **Fetch API** | Consumo de servicios REST |
| **CSS3 / Flexbox / Grid** | Diseño responsivo y efectos neón |
| **Google Fonts** | Tipografía personalizada (Orbitron, Creepster) |

---

## Estuctuara del Proyecto

```bash
rick-and-morty-app/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── CharacterCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── LoadingSpinner.jsx
│   ├── pages/            # Vistas principales (Rutas)
│   │   ├── Home.jsx
│   │   ├── FilterBySpecies.jsx
│   │   ├── CharacterDetail.jsx
│   │   └── ErrorPage.jsx
│   ├── services/         # Lógica de API (Fetch)
│   │   └── api.js
│   ├── App.jsx           # Layout y Configuración de Rutas
│   └── main.jsx          # Punto de entrada
├── index.html            # Template HTML y Estilos Globales
├── package.json          # Dependencias y Scripts
└── vite.config.js        # Configuración de Vite
```

---

## Instalación y Ejecución

Para clonar y ejecutar esta aplicación localmente, sigue estos pasos:

1. **Clonar el proyecto:**
   ```bash
   # Navega a la carpeta donde quieras el proyecto
   cd Rick-And-Morty/rick-and-morty-app
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Lanzar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Acceder a la App:**
   Abre [http://localhost:5173/](http://localhost:5173/) en tu navegador.

---

## Créditos
- **API Original:** [Rick and Morty API](https://rickandmortyapi.com/)
- **Autor:** Miguel Angel Buitron Becerra

---
