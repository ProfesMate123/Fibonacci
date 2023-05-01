import { Route, Routes } from 'react-router-dom';
import { Services } from '../Services/Services';
import { Menu } from '../Shared/Menu/Menu';
import { Footer } from '../Shared/Footer/Footer';
import { Home } from '../Home/Home';
import { Formulario } from '../Formulario/Formulario';

export const Router = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/agenda" element={<Formulario />} />
      </Routes>
      <Footer />
    </>
  );
};
