import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes/router";
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
