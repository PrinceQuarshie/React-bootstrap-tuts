import './App.css'
import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/news" component={News} />
           <Route path="/contacts" component={Contact} />
           <Route path="/details" component={Details} />
           <Route component={NotFoundPage} />
         </Switch>
        <Footer />

    </div>
    );
  }
}


export default App;
