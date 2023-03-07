import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
