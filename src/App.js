import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Product from './Pages/Product/Product';
import Product_detail from './Pages/Product Detail/Product_detail';
import store, { persistor } from 'Redux/store';
import AppBar from 'component/AppBar/AppBar';
import Cartdetail from 'Pages/Cartdetail/Cartdetail';

function App() {

  const routes = [
    {
      path: '/',
      Component: Product,
    },
    {
      path: '/product-detail',
      Component: Product_detail
    },
    {
      path: '/product-detail/:id',
      Component: Product_detail
    },
    {
      path: '/cart',
      Component: Cartdetail
    }
  ];

  const routeComponents = routes.map(Routes => {
    return (
      <Route
        key={Routes.path}
        path={Routes.path}
        element={<AppBar><Routes.Component /></AppBar>}
      />
    );
  });


  return (
    <>
      <div className="App">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router>
              <Routes>{routeComponents}</Routes>
            </Router>
          </PersistGate>
        </Provider>
      </div >
    </>
  );
}

export default App;
