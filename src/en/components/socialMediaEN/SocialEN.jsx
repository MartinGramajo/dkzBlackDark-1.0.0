import { Image, Spinner } from "react-bootstrap";
import "./socialEN.css";
import LineaNaranja from "../../../esp/components/LineaNaranja";
import socialMedia from "../../../esp/assets/img/social-media.png";
import socialMediaCelu from "../../../esp/assets/img/redes-sociales-mobile.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import BotonContactanosEN from "../BotonContactanosEN";
import { Link } from "react-router-dom";
import OtrosCasosEN from "../OtrosCasosEN";

const SocialEn = () => {
  const [trabajos, setTrabajos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getTrabajos = async () => {
      const response = await axios.get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQA6RTHRyOTuR1qZesdUWlzihrNNeINy7sgWYCrDeH-vfC_K5eUsWoc66RTDtfx6AEATMBVPYafw003/pub?gid=857708681&single=true&output=csv"
      );
      const imagenes = Papa.parse(response.data, { header: true });
      setTrabajos(imagenes.data);
    };
    getTrabajos();
    setLoading(false);
  }, []);
  return (
    <div className="color-negro-fondo">
      <div className="container padding-titulo">
        <div className="d-none d-md-block">
          <LineaNaranja />
          <h1 className="peso-bold">SOCIAL MEDIA</h1>
          <h4 className="py-4 peso-regular">
            In our agency, we develop customized strategies for your company
            with creativity and commitment when executing digital projects.
            Based on a strong track record in the generation of content, we work
            to create, specific campaigns and actions, Through social media
            platforms and channels, according to the global strategy of the
            company.
          </h4>
          <h4 className="py-4 peso-regular">
            Creating an effective social media strategy can help you grow your
            business and create engagement with your audience.
          </h4>
        </div>
        <div className="mx-3 d-md-none d-block">
          <LineaNaranja />
          <h3 className="peso-bold py-3">SOCIAL MEDIA</h3>
          <h6 className="py-3 peso-regular">
            In our agency, we develop customized strategies for your company
            with creativity and commitment when executing digital projects.
            Based on a strong track record in the generation of content, we work
            to create, specific campaigns and actions, Through social media
            platforms and channels, according to the global strategy of the
            company.
          </h6>
          <h6 className="py-3 peso-regular">
            Creating an effective social media strategy can help you grow your
            business and create engagement with your audience.
          </h6>
        </div>
        <div className="texto-estrategia-creatividad py-5 d-none d-md-block">
          <div className="d-flex justify-content-around">
            <h2 className="peso-bold color-naranja py-4">STRATEGY</h2>
            <h2 className="peso-bold color-naranja py-4">CREATIVITY</h2>
            <h2 className="peso-bold color-naranja py-4">COMPROMISE</h2>
          </div>
        </div>
        <div className="d-md-none d-block">
          <div className="d-flex justify-content-evenly">
            <h5 className="peso-bold color-naranja py-3">STRATEGY</h5>
            <h5 className="peso-bold color-naranja py-3">CREATIVITY</h5>
          </div>
          <div className="d-flex justify-content-center">
            <h5 className="peso-bold color-naranja py-3">COMPROMISE</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="d-none d-md-block">
              {" "}
              <Image
                className="py-1"
                src={socialMedia}
                fluid
                alt="iconos social Media"
              />
            </div>
            <div className="d-md-none d-block">
              <div className="text-center">
                <Image
                  className="py-1"
                  src={socialMediaCelu}
                  fluid
                  alt="iconos social Media"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 contenido-centrado py-1">
            <h4 className="peso-regular d-none d-md-block">
              At DKZ we believe in the importance of creating personalized
              digital marketing strategies that tell unique stories which
              connect with your audience and generate the impact you are looking
              for.
            </h4>
            <h6 className="peso-regular d-md-none d-block mx-3">
              At DKZ we believe in the importance of creating personalized
              digital marketing strategies that tell unique stories which
              connect with your audience and generate the impact you are looking
              for.
            </h6>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="text-white spinner py-5">
          <Spinner
            className="fs-1"
            animation="border"
            role="status"
            variant="light"
          ></Spinner>
        </div>
      ) : (
        <OtrosCasosEN trabajos={trabajos} tipo="social-media" />
      )}
      <div className="d-flex justify-content-center ">
        <Link
          className="text-decoration-none text-white d-none d-lg-block pb-5"
          to="/services"
        >
          <h3 className="peso-bold">{"< < Back To"}</h3>
        </Link>
        <Link
          className="text-decoration-none text-white d-lg-none d-block pt-5 pb-4"
          to="/services"
        >
          <h4 className="peso-bold">{"< < Back To"}</h4>
        </Link>
      </div>
      <div className="d-flex justify-content-center py-5 color-negro-a-negroclaro-fondo">
        <BotonContactanosEN />
      </div>
    </div>
  );
};

export default SocialEn;
