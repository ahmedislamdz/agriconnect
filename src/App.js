// App.js
import React from 'react';
import { Navigate, createBrowserRouter, createHashRouter, useRoutes } from 'react-router-dom';
import Basket from './components/Basket/Basket';
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Details from './components/Details/Details';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

// استخدام createBrowserRouter أو createHashRouter
const BrowserRouter = createBrowserRouter();
// const HashRouter = createHashRouter();

function App() {
  let router = useRoutes([
    { path: '/', element: <Main /> },
    { path: '/Products', element: <Products /> },
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '/basket', element: <Basket /> },
    { path: '*', element: <Navigate to={'/'} /> },
  ]);

  return (
    <ContextProvider>
      <ContextFilter>
        <Header />
        {router}
        <Footer />
      </ContextFilter>
    </ContextProvider>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
