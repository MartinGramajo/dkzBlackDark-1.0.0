import React from "react";
import Servicios from "../components/servicios/Servicios";
import { NavbarReactV2 } from "../components/navbarReactV2/NavbarReactV2";
import { FooterReact } from "../components/FooterReact/FooterReact";

export const ServiciosPage = () => {
  return (
    <div className="color-negro-fondo">
      <NavbarReactV2 />
      <div className="pb-5">
        <Servicios />
      </div>
      <FooterReact />
    </div>
  );
};
