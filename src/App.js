import { Router, BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { AddPerson } from "./page/AddPerson";
import { DetailPerson } from "./page/DetailPerson";
import { Main } from "./page/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
      </Routes>
      <Routes>
        <Route path="/add-person" element={<AddPerson />} exact />
      </Routes>
      <Routes>
        <Route path="/detail-person/:id" element={<DetailPerson />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
