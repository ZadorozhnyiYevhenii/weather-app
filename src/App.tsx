import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { router } from "./router";

function App() {
  return (
    <div>
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
