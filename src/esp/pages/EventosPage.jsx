import React from "react";
import Eventos from "../components/eventos/Eventos";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";

export default function EventosPage() {
  return (
    <div>
      <NavbarReactV2 />
      <Eventos />
    </div>
  );
}
