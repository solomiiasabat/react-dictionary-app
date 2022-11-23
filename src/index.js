import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/Footer/Footer";
import SearchEngine from "./components/SearchEngine/SearchEngine";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <SearchEngine />

      <Footer />
    </div>
  </React.StrictMode>
);
