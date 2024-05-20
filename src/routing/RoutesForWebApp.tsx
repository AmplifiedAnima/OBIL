import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { AboutCreatorPage } from '../pages/AboutCreatorPage/AboutCreatorPage';
import { ContactPage } from '../pages/ContactPage/ContactPage';

export const RoutesForWebApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-creator" element={<AboutCreatorPage />} />
      <Route path="/contact-me" element={<ContactPage />} />
    </Routes>
  );
};
