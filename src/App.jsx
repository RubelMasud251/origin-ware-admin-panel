import { useState } from "react";

import Login from "./pages/login/Login";
import Dashboard from "./layout/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return <>{isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}</>;
};

export default App;
