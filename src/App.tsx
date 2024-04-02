import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { router } from "./router";
import { SettingsModal } from "./components/SettingsModal/SettingsModal";

function App() {
  return (
    <div className="app">
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
