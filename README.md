# P5.1 - Componentes React con Tailwind
> S2DAW Diseño de Interfaces Web

> Autores: Laura Arellano Torrero & Diego Fernández Lozano

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
    
  ![Diseño de Fuentes en Figma](./ReadmeAssets/Fuentes.png)
  ```css
    /* FONT-FAMILY */
    --font-source-code-pro: "Source Code Pro", sans-serif;
    --font-barlow-semi-condensed: "Barlow Semi Condensed", sans-serif;

    /* TYPOGRAPHY */
    --text-paragraph: 1rem;
    --text-h1: 3.5rem;
    --text-h2: 2.625rem;
    --text-h3: 1.875rem;
    --text-button: 1.25rem;

    --leading-paragraph: 1.5rem;
    --leading-h1: 3.5rem;
    --leading-h2: 2.25rem;
    --leading-h3: 1.875rem;
    --leading-button: 1.5rem;
  ```

- **Paleta de Colores**: Definimos una paleta que incluye colores basados en el verde para acompañar el logo, así como colores auxiliares que crean un buen contraste. Entre los colores principales destacan:
  - **Azul (#0A7E8D)**: Color principal para botones.
  - **Verde botón (#42BB7D)**: Color secundario para los botones.
  - **Verde (#499E5A)**: Color principal de la página.
  - **Crema (#E4CFAA)**: Color suave para contrastar con el principal.
  - **Gris (#3F3F3F)**: Color oscuro más suave que el color negro. Para la tipografía.
  - **Blanco (#F0F0F0)**: Color de fondo, un blanco ligeramente apagado.
  - **Amarillo estrella (#FDB500)**: Color para los iconos de estrella, utilizados en las card.
    
  ![Diseño de Nuestra Paleta de Colores en Figma](./ReadmeAssets/PaletaColores.png)
  ```css
    /* COLOR */
    --color-main-1: #0A7E8D;
    --color-main-2: #42bb7d;
    --color-main-3: #499e5a;
    --color-main-4: #e4cfaa;
    --color-main-5: #3f3f3f;
    --color-main-6: #f0f0f0;
    --color-main-7: #FDB500;
  ```
- **Componentes:** Definimos varios componentes como:
  - **Botones**: El botón por defecto es azul, y transiciona a un color verde al posicionar el ratón sobre él. Su acción al ser pulsado es mostrar por consola un texto predefinido, pero más adelante se modificará según convenga. Este botón puede estar también desactivado, cambiando a un color blanco y no realizando ninguna acción al ser pulsado.

  ![Diseño de Botones en Figma](./ReadmeAssets/Botones.png)
  - **Barra de búsqueda**: Esta barra de búsqueda, presente en el Header, permite escribir en ella y al pulsar sobre el icono de la lupa mostrará su contenido por consola, más adelante se implementará la búsqueda.

  ![Diseño de Barra de Búsqueda en Figma](./ReadmeAssets/BarraBusqueda.png)
  - **Cards de reseñas con un sistema de puntuación**: En las cards añadimos las reseñas de clientes, con el nombre de usuario, su reseña y una calificación de 0 a 5 estrellas.

  ![Diseño de las Cards en Figma](./ReadmeAssets/Card.png)
  - **Header**: Elemento de cabecera con el icono de la empresa, enlaces a las 4 páginas, y una barra de navegación.

  ![Diseño del Header en Figma](./ReadmeAssets/Header.png)
  - **Footer**: Elemento de pie de página con el copyright, código postal, icono y enlaces a redes sociales de la empresa; además de enlaces a páginas de interés legal.

    ![Diseño del Footer en Figma](./ReadmeAssets/Footer.png)

## 3. Exportación a Tailwind CSS

Una vez definido el diseño en Figma, exportamos las variables de estilo al archivo `index.css`, donde creamos variables que utilizará Tailwind de forma automática gracias al sistema de etiquetas que tiene implementado. Esto nos permite reutilizar las mismas fuentes, colores y tamaños en el proyecto.

## 4. Implementación de componentes en React

En la implementación, utilizamos **React** y **TypeScript** para crear los componentes de manera modular y reutilizable. Cada componente (botones, inputs, tarjetas, etc.) está estilizado con clases de Tailwind además de las variables anteriormente exportadas desde Figma.

## 5. Creación de una página de prueba

Tras implementar los componentes, hemos creado una página sencilla donde podemos probar el funcionamiento de cada componente. Aquí se muestra cada componente ya implementado y funcionando en la página de prueba: 

- **Botones**:  
![Diseño de Botones en React](./ReadmeAssets/BotonesExample.png)
- **Barra de búsqueda**:  
![Diseño de Barra de Búsqueda en React](./ReadmeAssets/BarraBusquedaExample.png)
- **Cards**:  
![Diseño de las Cards en React](./ReadmeAssets/CardsExample.png)
- **Header**:  
![Diseño del Header en React](./ReadmeAssets/HeaderExample.png)
- **Footer**:  
![Diseño del Footer en React](./ReadmeAssets/FooterExample.png)

## 6. Enlaces de interés

- **[Enlace al Sistema de Diseño en Figma]**:(https://www.figma.com/design/pFMKjOIWh9W0iOTL0lAkUh/Figma-Pistacho-Webs?node-id=0-1&t=aO5bD78e4onGbYFK-1)
- **[Repositorio en GitHub]**: (https://github.com/DiegoFerLoz/DIW-P5.1-Deisgn-System-with-React-Tailwind)

Este documento proporciona una visión general del proyecto y las decisiones que hemos tomado en cuanto a diseño. 
