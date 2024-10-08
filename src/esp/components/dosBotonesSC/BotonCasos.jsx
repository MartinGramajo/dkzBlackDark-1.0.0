import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BotonCasos() {
    return (
        <Button as={Link} to="/casos" className="boton-naranja-grande">
            <h2 className="peso-bold ps-4 d-none d-lg-block">CASOS</h2>
            <h5 className="peso-bold ps-4 d-lg-none d-block">CASOS</h5>
            <h2 className="peso-bold pe-3 d-none d-lg-block">➝</h2>
            <h3 className="peso-bold pe-3 d-lg-none d-block">➝</h3>
        </Button>
    );
}
