import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './actions/authActions';
import {
  Home,
  Create,
  Shop,
  Product,
  AddProduct,
  UserPage,
  Order,
  AboutUs
} from './components/containers'

import {
  Route,
  Switch,
  withRouter,
  BrowserRouter as Router,

} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  generateRoutes = () => (
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route path="/create/" component={Create} />
      <Route path="/shop/" component={Shop} />
      <Route path="/product/" component={Product} />
      <Route path="/add_product/" component={AddProduct} />
      <Route path="/user/:id" component={UserPage} />
      <Route path="/order/" component={Order} />
      <Route path="/about/" component={AboutUs} />
    </Switch>
  );

  render() {
    return (
      <Provider store={store}>
        <Router >
          <Header />
          {this.generateRoutes()}
          <Footer />
        </Router>
      </Provider>

    );
  }
}


withRouter(App)

export default App;
