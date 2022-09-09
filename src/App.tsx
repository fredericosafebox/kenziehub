import { GlobalStyle } from "./styles/global";
import { Router } from "./routes/Router";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <GlobalStyle />
        <Router />
        <ToastContainer autoClose={5000} />
      </AuthProvider>
    </div>
  );
}

export default App;
