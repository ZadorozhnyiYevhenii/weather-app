import { Link, Route, Routes } from "react-router-dom";
import { router } from "./router/router";
import { SettingsModal } from "./components/SettingsModal/SettingsModal";
import { TiWeatherPartlySunny } from "react-icons/ti";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Link to='/' className="app__logo">
        <TiWeatherPartlySunny className="app__logo" />
      </Link>
      <Routes>
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>

      <div className="settings-modal">
        <SettingsModal />
      </div>
    </div>
  );
}

export default App;
