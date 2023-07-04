// import { NovedadesDetallados } from "../components/Novedades/NovedadesContenido/NovedadesDetallados";
import { NovedadesDetalleCel } from "../components/Novedades/NovedadesContenido/NovedadesDetalleCel";
import NovedadesDetalleEsc from "../components/Novedades/NovedadesContenido/NovedadesDetalleEsc";
import DosBotonesSC from "../components/dosBotonesSC/DosBotonesSC";

export default function NovedadesDetalle() {
    return (
        <div className="color-negro-fondo">
            <div className="d-none d-lg-block">
                <NovedadesDetalleEsc />
            </div>
            <div className="d-lg-none d-block">
                <NovedadesDetalleCel />
            </div>
            <div className="color-negro-fondo">
                <DosBotonesSC />
            </div>
        </div>
    );
}
