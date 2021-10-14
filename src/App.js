import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Message from "./components/Message/Message";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Hero />
      <Message />
      <Products />
    </main>
    <Footer />
  </div>
);

export default App;
ReactDOM.render(App, document.getElementById("root"));
