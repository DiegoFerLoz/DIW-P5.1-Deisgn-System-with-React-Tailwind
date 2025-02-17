# P5.1 - Componentes React con Tailwind
> S2DAW Diseño de Interfaces Web

> Autores: Laura Arellano Torrero & Diego Fernández López

## 1. Descripción general de nuestro proyecto

Este proyecto forma parte de la práctica 5.1 en la asignatura de Diseño de Interfaces Web del curso S2DAW. El objetivo principal es transformar un conjunto de wireframes diseñados previamente en Figma en un **Sistema de Diseño**. A partir de este sistema de diseño, exportamos las variables a un proyecto de **React** utilizando **TypeScript** y **Tailwind**. Entonces creamos los componentes del sistema de diseño realizado en Figma.

## 2. Sistema de Diseño en Figma

En Figma, creamos los siguientes elementos del sistema de diseño:

- **Tipografías**: Se utilizarán dos fuentes principales: 
  - **Source Code Pro**: Esta será la fuente principal de la página web, tratándose de una fuente que comparte estilo con las fuentes utilizadas en entornos de desarrollo de software.
  - **Barlow Semi Condensed**: Esta segunda fuente la utilizaremos para distinguir encabezados.
  
  Los tamaños de los textos se definieron de la siguiente manera:
  - **H1**: 56 px con un interlineado de 56 px.
  - **H2**: 42 px con un interlineado de 36 px.
  - **H3**: 30 px con un interlineado de 30 px.
  - **Párrafo:**: 16 px con un interlineado de 24 px.
  - **Botones**: 20 px con un interlineado de 24 px.

- **Paleta de Colores**: Definimos una paleta que incluye colores basados en el verde para acompañar el logo, así como colores auxiliares que crean un buen contraste. Entre los colores principales destacan:
  - **Azul (#0A7E8D)**: Color principal para botones.
  - **Verde botón (#42BB7D)**: Color secundario para los botones.
  - **Verde (#499E5A)**: Color principal de la página.
  - **Crema (#E4CFAA)**: Color suave para contrastar con el principal.
  - **Gris (#3F3F3F)**: Color oscuro más suave que el color negro. Para la tipografía.
  - **Blanco (#F0F0F0)**: Color de fondo, un blanco ligeramente apagado.
  - **Amarillo estrella (#FDB500)**: Color para los iconos de estrella, utilizados en las card.
  
- **Componentes:** Definimos varios componentes como:
  - **Botones**: El botón por defecto es azul, y transiciona a un color verde al posicionar el ratón sobre él. Su acción al ser pulsado es mostrar por consola un texto predefinido, pero más adelante se modificará según convenga. Este botón puede estar también desactivado, cambiando a un color blanco y no realizando ninguna acción al ser pulsado.
  - **Barra de búsqueda**: Esta barra de búsqueda, presente en el Header, permite escribir en ella y al pulsar sobre el icono de la lupa mostrará su contenido por consola, más adelante se implementará la búsqueda.
  - **Cards de reseñas con un sistema de puntuación**: En las cards añadimos las reseñas de clientes, con el nombre de usuario, su reseña y una calificación de 0 a 5 estrellas.
  - **Header**: Elemento de cabecera con el icono de la empresa, enlaces a las 4 páginas, y una barra de navegación.
  - **Footer**: Elemento de pie de página con el copyright, código postal, icono y enlaces a redes sociales de la empresa; además de enlaces a páginas de interés legal.

## 3. Exportación a Tailwind CSS

Una vez definido el diseño en Figma, exportamos las variables de estilo al archivo `index.css`, donde creamos variables que utilizará Tailwind de forma automática gracias al sistema de etiquetas que tiene implementado. Esto nos permite reutilizar las mismas fuentes, colores y tamaños en el proyecto.

## 4. Implementación de componentes en React

En la implementación, utilizamos **React** y **TypeScript** para crear los componentes de manera modular y reutilizable. Cada componente (botones, inputs, tarjetas, etc.) está estilizado con clases de Tailwind además de las variables anteriormente exportadas desde Figma.

## 5. Creación de una página de prueba

Tras implementar los componentes, hemos creado una página sencilla donde podemos probar el funcionamiento de cada componente.

## 6. Enlaces de interés

- **[Enlace al Sistema de Diseño en Figma]**:(https://www.figma.com/design/pFMKjOIWh9W0iOTL0lAkUh/Figma-Pistacho-Webs?node-id=0-1&t=aO5bD78e4onGbYFK-1)
- **[Repositorio en GitHub]**: (https://github.com/DiegoFerLoz/DIW-P5.1-Deisgn-System-with-React-Tailwind)

Este documento proporciona una visión general del proyecto y las decisiones que hemos tomado en cuanto a diseño. 
