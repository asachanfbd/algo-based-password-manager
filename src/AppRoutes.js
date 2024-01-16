import { Route } from 'react-router-dom';
import PasswordGenerator from './password_generator/PasswordGeneratorController';
import { BrowserRouter, Routes } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import HomePage from './HomePage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/password_generator" element={<PasswordGenerator />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
