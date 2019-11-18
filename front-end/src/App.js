import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from "@loadable/component";

// Route
import MainPage from './pages/MainPage';
const SearchResultPage = loadable(() => import('./pages/SearchResultPage'));
const ProductDetailPage = loadable(() => import('./pages/ProductDetailPage'));
const BookingPage = loadable(() => import('./pages/BookingPage'));
const ErrorPage = loadable(() => import('./pages/ErrorPage'));

function App() {

  return (
    <div className="App">

      <Switch>
        <Route component={ MainPage } path="/" exact />
        <Route component={ SearchResultPage } path="/searchResult" />
        <Route component={ ProductDetailPage } path="/productDetail" />
        <Route component={ BookingPage } path="/booking" />
        <Route component={ ErrorPage } path="*" />
      </Switch>
    </div>
  );
}

export default App;
