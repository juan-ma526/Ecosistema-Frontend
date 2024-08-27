/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

/*Recibe dos parametros, 
elements: array para el slider, 
styleradius: para el borderRadius en formato texto*/
function Carousel( props ){
    return(
        <Swiper
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            style={{borderRadius: props.styleradius }} 
        >
            {props.elements.map( (element, i) => {
                console.log(element);
                return (
                    <SwiperSlide key={i}>
                        <div>
                            <img src={element.url}  alt={`Slide ${i}`} />
                        </div>
                    </SwiperSlide>
                )
                })
            }
        </Swiper>
    )
}

export default Carousel;