/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Carrousel({ images = [] }) {
  // Verificar si images es un array y tiene elementos
  if (!Array.isArray(images) || images.length === 0) {
    console.error("images prop is not an array or it is empty:", images);
    return null;
  }

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          /* Item Slide */
          <SwiperSlide key={index}>
            <img
              src={image.url || image}
              alt={`Imagen ${index}`}
              style={{ width: "100%", height: "auto" }} // Ajuste para el tamaño de la imagen
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
