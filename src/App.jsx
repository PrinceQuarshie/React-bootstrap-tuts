import './App.css'
import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layouts/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam deleniti sapiente nihil obcaecati? Non consequatur tenetur ad perspiciatis at? Minus quisquam molestiae facere sunt perspiciatis praesentium quae atque consectetur nostrum. Aspernatur molestias possimus velit, ratione beatae harum quibusdam, provident qui vero expedita porro veritatis!
        <br />
        <Footer />

    </div>
    );
  }
}


export default App;
