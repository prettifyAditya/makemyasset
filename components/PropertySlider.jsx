import Link from "next/link"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import PropertyCol from "./PropertyCol"

const Property = [
    {
        imgSrc : "/assets/images/property/property1.jpg",
        PropName : "Vardon Villa Compound",
        PropLoc : "Damac Hills"
    },
    {
        imgSrc : "/assets/images/property/property1.jpg",
        PropName : "Vardon Villa Compound",
        PropLoc : "Damac Hills"
    },
    {
        imgSrc : "/assets/images/property/property1.jpg",
        PropName : "Vardon Villa Compound",
        PropLoc : "Damac Hills"
    },
    {
        imgSrc : "/assets/images/property/property1.jpg",
        PropName : "Vardon Villa Compound",
        PropLoc : "Damac Hills"
    },
]



export default function PropertySlider() {
    const swiperRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
        if (swiperRef.current?.navigation) {
            swiperRef.current.navigation.update();
        }
        }, 100)
    }, [])
    return(
        <div className="property-slider-wrapper">
            <div className="swiper-nav center-full hide-btn-no-loop">
                <button className="property-prev swiper-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                <button className="property-next swiper-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
            </div>
            <Swiper 
                className="property-slider"
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={20}
                speed={1000}
                navigation={{
                    prevEl: ".property-prev",
                    nextEl: ".property-next"
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    540: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)} 
            >
                {Property.map((property, item) => (
                    <SwiperSlide key={item}>
                        <PropertyCol
                            imgSrc={property.imgSrc}
                            PropName={property.PropName}
                            PropLoc={property.PropLoc}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}