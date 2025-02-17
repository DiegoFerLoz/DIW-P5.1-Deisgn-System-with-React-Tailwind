# P5.1 - Componentes React con Tailwind
> S2DAW Diseño de Interfaces Web

> Autores: Laura Arellano Torrero & Diego Fernández López

## 1. Descripción General de nuestro proyecto

Este proyecto forma parte de la práctica 5.1 en la asignatura de Diseño de Interfaces Web (S2DAW). El objetivo principal fue transformar un conjunto de wireframes desarrollados previamente en Figma en un **Sistema de Diseño** bien estructurado. A partir de este sistema de diseño, exportamos los estilos a un proyecto de **React** utilizando **TypeScript** y **Tailwind CSS** para la estilización de los componentes.

### Sistema de Diseño en Figma

En Figma, creamos y definimos los siguientes elementos para estructurar el sistema de diseño:

- **Tipografías:** Se utilizaron dos fuentes principales: 
  - *Fuente primaria:* **Source Code Pro** para elementos monoespaciados, como el cuerpo de texto y botones.
  - *Fuente secundaria:* **Barlow Semi Condensed** para los títulos y encabezados.
  
  Los tamaños de los textos se definieron de la siguiente manera:
  - **H1:** 56 px
  - **H2:** 42 px
  - **H3:** 30 px
  - **Párrafo:** 16 px con un interlineado de 24 px.

- **Paleta de Colores:** Definimos una paleta que incluye colores primarios y secundarios, además de colores para estados como hover y disabled. Entre los colores principales destacan:
  - **Verde oscuro (#4CAF50):** Color principal para botones y elementos de acción.
  - **Cian (#26C6DA):** Color secundario para complementar el diseño.
  - **Amarillo hover (#FFEB3B):** Indicado para interacciones hover.
  - **Gris disabled (#9E9E9E):** Para los estados deshabilitados de los elementos.
  
- **Componentes:** Definimos varios componentes reutilizables como:
  - Botones (en sus diferentes estados: activo, hover y disabled).
  - Barra de búsqueda con ícono.
  - Tarjetas de reseñas con un sistema de estrellas.
  - Header con navegación.
  - Footer con enlaces a redes sociales y legales.

### Exportación a Tailwind CSS

Una vez definido el diseño en Figma, exportamos las variables de estilo y configuramos el archivo `tailwind.config.js` para Tailwind CSS. Esto nos permite reutilizar las mismas fuentes, colores y tamaños en el proyecto de React. Los valores específicos de colores y fuentes se añadieron en la configuración de Tailwind para asegurar que el diseño sea coherente.

### Implementación en React

En la implementación, utilizamos **React** y **TypeScript** para crear los componentes de manera modular y reutilizable. Cada componente (botones, inputs, tarjetas, etc.) fue estilizado con clases de Tailwind CSS, y se añadieron variantes para gestionar diferentes estados, como hover, focus y disabled.

## 2. Enlaces de interés

- **Enlace al Sistema de Diseño en Figma:** [Enlace aquí](#)
- **Repositorio en GitHub:** [Enlace al repositorio](#)

Este documento proporciona una visión general del proyecto y las decisiones que tomamos en cuanto a diseño y desarrollo. Además, contiene enlaces a recursos adicionales como el diseño en Figma y el código fuente del proyecto en GitHub.

