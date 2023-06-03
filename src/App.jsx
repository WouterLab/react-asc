import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";
import { Profile } from "./pages/Profile/Profile";
import { NewCard } from "./pages/NewCard/NewCard";
import { Cards } from "./pages/Cards/Cards";
import { Help } from "./pages/Help/Help";
import { MyCards } from "./pages/MyCards/MyCards";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const login = (data) => {
    if (data.login !== "" && data.password !== "") setIsLogged(true);
    else {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 3000);
    }
  };

  return (
    <>
      {isLogged ? (
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/new-card' element={<NewCard />} />
          <Route path='/my-cards' element={<MyCards />} />
          <Route path='/help' element={<Help />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      ) : (
        <Login login={login} loginError={loginError} />
      )}
    </>
  );
}

export default App;
