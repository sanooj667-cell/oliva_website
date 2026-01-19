import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <>
  <RouterProvider router={router} />



    </>
  );
}

export default App;
