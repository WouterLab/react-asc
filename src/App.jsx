import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import Help from "./pages/Help";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Timetable from "./pages/Timetable";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const login = (data) => {
    if (data.login === "polina" && data.password === "polina")
      setIsLogged(true);
    else setIsLogged(false);
  };

  return (
    <>
      {isLogged ? (
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/timetable' element={<Timetable />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      ) : (
        <Login login={login} />
      )}
    </>
  );
}

export default App;
