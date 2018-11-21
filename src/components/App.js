import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, List, Product, Reservation } from 'pages';
import Header from 'components/Header';

const App = () => {
  return (
    <Fragment>
        <Header/>
        {/*<ul>*/}
          {/*<li><Link to="/">메인</Link></li>*/}
          {/*<li><Link to="/List">List</Link></li>*/}
          {/*<li><Link to="/Product">Product</Link></li>*/}
          {/*<li><Link to="/Reservation">Reservation</Link></li>*/}
        {/*</ul>*/}

        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/List" component={ List } />
          <Route path="/Product" component={ Product } />
          <Route path="/Reservation" component={ Reservation } />
        </Switch>
    </Fragment>
  )
};

export default App;
