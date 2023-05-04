import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Cards } from "./pages/Cards";
import { Help } from "./pages/Help";
import { Login } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";
import { Timetable } from "./pages/Timetable";
import { Profile } from "./pages/Profile/Profile";
import { NewCard } from "./pages/NewCard/NewCard";

function App() {
  const [isLogged, setIsLogged] = useState(true);
  const [loginError, setLoginError] = useState(false);

  const login = (data) => {
    if (data.login === "polina" && data.password === "polina")
      setIsLogged(true);
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
          <Route path='/timetable' element={<Timetable />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/new-card' element={<NewCard />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      ) : (
        <Login login={login} loginError={loginError} />
      )}
    </>
  );
}

export default App;
