import React from "react";
import "../clientesEN/clientes.css";
import LineaNaranja from "../../../esp/components/LineaNaranja";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "react-bootstrap";
import caja from "../../../esp/assets/logos/cajapopular.jpg";
import speed from "../../../esp/assets/logos/speed.jpg";
import gaceta from "../../../esp/assets/logos/lagaceta.jpg";
import schilman from "../../../esp/assets/logos/schilman.jpg";
import patagonia from "../../../esp/assets/logos/patagonia.jpg";
import uniber from "../../../esp/assets/logos/uniber.jpg";
import gob from "../../../esp/assets/logos/gobtucuman.jpg";
import lemons from "../../../esp/assets/logos/lemons.jpg";
import tucutanos from "../../../esp/assets/logos/tucutanos.jpg";
import estancia from "../../../esp/assets/logos/estancia.jpg";
import urt from "../../../esp/assets/logos/urt.jpg";
import seven from "../../../esp/assets/logos/seven.jpg";
import sancor from "../../../esp/assets/logos/sancor.jpg";
import aguila from "../../../esp/assets/logos/penon.jpg";
import tbc from "../../../esp/assets/logos/tbc.jpg";

export default function ClientesEN() {
  return (
    <div>
      <div className="container padding-titulo">
        <div>
          <LineaNaranja />
        </div>
        <div>
          <h2 className="peso-bold pb-5">CUSTOMERS</h2>
        </div>
      </div>
      <div className=" d-lg-block d-none ">
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          <SwiperSlide className="bg-white">
            <div className="d-flex justify-content-center">
              <Image
                className="py-3 icono-carousel-clientes mx-5"
                src={caja}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={speed}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={gaceta}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={schilman}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes mx-5"
                src={patagonia}
                alt="Aumenta tus ventas"
                fluid
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white">
            <div className="d-flex justify-content-center">
              <Image
                className="py-3 icono-carousel-clientes"
                src={uniber}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={gob}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={lemons}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={tucutanos}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={estancia}
                alt="Aumenta tus ventas"
                fluid
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-white">
            <div className="d-flex justify-content-center">
              <Image
                className="py-3 icono-carousel-clientes"
                src={urt}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={seven}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={sancor}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={aguila}
                alt="Aumenta tus ventas"
                fluid
              />
              <Image
                className="py-3  icono-carousel-clientes"
                src={tbc}
                alt="Aumenta tus ventas"
                fluid
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="d-block d-lg-none">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper bg-white"
        >
          <SwiperSlide className="cartas-slider">
            <Image className="mx-5 pt-4" src={caja} alt="caja popular" fluid />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image className="mx-5 pt-4" src={speed} alt="caja popular" fluid />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 pt-4"
              src={gaceta}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 pt-4"
              src={schilman}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 pt-4"
              src={patagonia}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 pt-4"
              src={uniber}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image className="mx-5 pt-4" src={gob} alt="caja popular" fluid />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 pt-4"
              src={lemons}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 pt-4"
              src={tucutanos}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 pt-4"
              src={estancia}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image className="mx-5 pt-4" src={urt} alt="caja popular" fluid />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image className="mx-5 pt-4" src={seven} alt="caja popular" fluid />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 pt-4"
              src={sancor}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image
              className="mx-5 pt-4"
              src={aguila}
              alt="caja popular"
              fluid
            />
          </SwiperSlide>
          <SwiperSlide className="cartas-slider">
            <Image className="mx-5 pt-4" src={tbc} alt="caja popular" fluid />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
