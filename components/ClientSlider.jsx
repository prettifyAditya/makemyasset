import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

export default function ClientSlider() {
    const swiperRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
        if (swiperRef.current?.navigation) {
            swiperRef.current.navigation.update();
        }
        }, 100)
    }, [])
    return(
         <div className="client-slider-wrapper">
            <Swiper
                className="client-slider"
                modules={[Autoplay]}
                direction="horizontal"
                autoplay = {{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop= {true}
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={4}
                speed={3000}
                breakpoints={{
                    0: {
                        slidesPerView: 4,
                    },
                    540: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 6,
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)} 
            >
                <SwiperSlide>
                    <figure>
                        <Image src="/assets/images/client/client1.png" width="200" height="62" alt="Client Image"></Image>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <Image src="/assets/images/client/client1.png" width="200" height="62" alt="Client Image"></Image>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <Image src="/assets/images/client/client1.png" width="200" height="62" alt="Client Image"></Image>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <Image src="/assets/images/client/client1.png" width="200" height="62" alt="Client Image"></Image>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <Image src="/assets/images/client/client1.png" width="200" height="62" alt="Client Image"></Image>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <Image src="/assets/images/client/client1.png" width="200" height="62" alt="Client Image"></Image>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <Image src="/assets/images/client/client1.png" width="200" height="62" alt="Client Image"></Image>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <Image src="/assets/images/client/client1.png" width="200" height="62" alt="Client Image"></Image>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <Image src="/assets/images/client/client1.png" width="200" height="62" alt="Client Image"></Image>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <Image src="/assets/images/client/client1.png" width="200" height="62" alt="Client Image"></Image>
                    </figure>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}