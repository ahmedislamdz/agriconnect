import { Navigate, createHashRouter, useRoutes } from 'react-router-dom';
import Basket from './src/components/Basket/Basket';
import ContextFilter from './src/components/Context/ContextFilter';
import ContextProvider from './src/components/Context/ContextProvider';
import Details from './src/components/Details/Details';
import FavoritePage from './src/components/Favorite/FavoritePage';
import Header from './src/components/Header/Header';
import Main from './src/components/Main/Main';
import Products from './src/components/Products/Products';
import Footer from './src/components/Footer/Footer '


function App() {
  let router = createHashRouter([
    { path: '/', element: <Main /> },
    { path: '/Products', element: <Products /> },
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '/basket', element: <Basket /> },
    { path: '*', element: <Navigate to={'/'} /> },
  ])
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

export default App;
