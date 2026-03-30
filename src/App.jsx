import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotifyProvider } from './context/NotifyContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import AboutPage from './pages/AboutPage';
import DeliveryPage from './pages/DeliveryPage';
import ContactsPage from './pages/ContactsPage';
import ProfilePage from './pages/ProfilePage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import { Navigate } from 'react-router-dom';
import useStore from './store/useStore';
import './App.css';

// Защищенные маршруты
const ProtectedRoute = ({ children }) => {
  const user = useStore(state => state.user);

  // Проверяем наличие пользователя и его роль
  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AuthRoute = ({ children }) => {
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <NotifyProvider>
        <div className="app-shell">
          <Header />
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={<HomePage />} />

            {/* Основные страницы */}
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />

            {/* Личный кабинет (только для авторизованных) */}
            <Route path="/profile" element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            } />

            {/* Админ-панель (только для администраторов) */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<AdminOrders />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </NotifyProvider>
    </BrowserRouter>
  );
}

export default App;