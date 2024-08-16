import { Routes, Route } from "react-router-dom";

import InviteForm from "../components/InviteForm";
import Confirm from "../components/Confirm";
import ConfirmedList from "../components/ConfirmedList";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<InviteForm />} />
      <Route path="/confirmacion/:code" element={<Confirm />} />
      <Route path="/confirmados" element={<ConfirmedList />} />
    </Routes>
  );
};

export default Rutas;
