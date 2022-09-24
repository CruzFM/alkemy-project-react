// Estructurando un sitio con navegación
// Objetivos 📌

// Deberás crear una estructura de navegación que permita mostrar un listado de links en un header, un pie de página y renderizar el contenido según la ruta. Para ello, deberás utilizar la librería React Router en su Versión 6

// Especificaciones técnicas 👈

// Las rutas son:
// '/': Renderizará el componente Home
// '/about': Renderizará el componente About
// El contenido de cada página no es relevante en esta etapa, por lo que deberás trabajar en los siguientes componentes:
// Navigator: Lista no ordenada con los links de navegación a las diferentes páginas en cada item
// Content: Renderizará el contenido que corresponda a cada ruta
// BaseLayout: Contendrá los componentes Navigator, Content y Footer

// ⚠️ IMPORTANTE: El contenedor principal (BrowserRouter) se encuentra importado a un nivel superior, por lo que NO se agregará en nuestro componente.⚠️
// Contenedor principal de la App:

//  const App = () => (<BrowserRouter> <BaseLayout> </BrowserRouter>);

import React from "react";
const useState = React.useState;
const useEffect = React.useEffect;
import { Route, Routes, Link } from "react-router-dom";

const Home = () => <div>Esta es la página Inicio</div>;
const About = () => <div>Esta es la página Nosotros</div>;
const Footer = () => <div>Esta es la sección Pié de Página</div>;

const Navigator = () => {
  // Deberá retornar múltiples elementos de lista <li> Que contengan los links para navegar.
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

const Content = () => {
  // Deberá retornar un contenedor de rutas, con las rutas correspondientes a cada componente dentro.
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

const BaseLayout = () => {
  // Deberá renderizar los componentes en conjunto.
  return (
    <>
      <Navigator />

      {Content}

      <Footer />
    </>
  );
};

export { BaseLayout, Navigator };
