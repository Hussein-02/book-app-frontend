import { BrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

// Suppressing warnings in development
if (process.env.NODE_ENV === "development") {
  console.warn = (message) => {
    if (!message.includes("React Router Future Flag Warning")) {
      console.warn(message);
    }
  };
}

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Outlet /> {/* This will render the child route's component */}
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
