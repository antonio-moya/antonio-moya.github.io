import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Antonio Moya</h2>
        <p><a href="mailto:antonio.moya.diez@gmail.com">antonio.moya.diez@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hola a todos. Mis amigos me llaman Toño y llevo más de 20 años en el mundo de las
        ciencias del medio ambiente en general y la hidrología en particular.
        En todo ese tiempo he pasado por todas las modas de ambos mundos. Desde los modelos
        numéricos de simulación hasta el aprendizaje automático o la teledetección. Desde el
        MVC hasta el DDD. Desde el ODBC hasta el NoSQL...<br />
        Durante todo ese camino he trabajo en empresas tanto tecnológicas como de ingeniería clasica
        y he pasado multitud de vicisitudes, desde dejar a toda España sin Intenet unas horas hasta
        proyectos de investigación europeos. Mi intención con este sitio web es contar mis aventuras
        y desventuras, desmitificar las tecnlogías novedosas y, si a alguien le puede servir,
        explicar qué es para mi un informático &quot;bueno&quot;.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
