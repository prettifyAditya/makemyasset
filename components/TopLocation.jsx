import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import Image from "next/image";


export default function TopLocation(){
    const swiperRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.navigation){
            swiperRef.current.navigation.update()
        }
        }, 100)
    }, [])
    return(
        <div className="top-location-wrapper">
            <div className="swiper-nav location-nav">
                <button className="location-prev swiper-prev primary-border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                <button className="location-next swiper-next primary-border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
            </div>
            <Swiper
                className="location-slider"
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                speed={1000}
                navigation={{
                    prevEl: ".location-prev",
                    nextEl: ".location-next"
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
                <SwiperSlide>
                    <div className="loc_wrapper">
                        <div className="loc_col">
                            <figure>
                                <Image src="/assets/images/property/loc1.jpg" width="85" height="57" alt="Top Location Image"></Image>
                            </figure>
                            <figcaption>
                                <p className="name">Dubai Marina, Dubai</p>
                                <p>221 Projects in Business Bay, Dubai</p>
                            </figcaption>
                        </div>
                        <div className="loc_col">
                            <figure>
                                <Image src="/assets/images/property/loc2.jpg" width="85" height="57" alt="Top Location Image"></Image>
                            </figure>
                            <figcaption>
                                <p className="name">Business Bay</p>
                                <p>221 Projects in Business Bay, Dubai</p> 
                            </figcaption>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="loc_wrapper">
                        <div className="loc_col">
                            <figure>
                                <Image src="/assets/images/property/loc1.jpg" width="85" height="57" alt="Top Location Image"></Image>
                            </figure>
                            <figcaption>
                                <p className="name">Dubai Marina, Dubai</p>
                                <p>221 Projects in Business Bay, Dubai</p>
                            </figcaption>
                        </div>
                        <div className="loc_col">
                            <figure>
                                <Image src="/assets/images/property/loc2.jpg" width="85" height="57" alt="Top Location Image"></Image>
                            </figure>
                            <figcaption>
                                <p className="name">Business Bay</p>
                                <p>221 Projects in Business Bay, Dubai</p> 
                            </figcaption>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="loc_wrapper">
                        <div className="loc_col">
                            <figure>
                                <Image src="/assets/images/property/loc1.jpg" width="85" height="57" alt="Top Location Image"></Image>
                            </figure>
                            <figcaption>
                                <p className="name">Dubai Marina, Dubai</p>
                                <p>221 Projects in Business Bay, Dubai</p>
                            </figcaption>
                        </div>
                        <div className="loc_col">
                            <figure>
                                <Image src="/assets/images/property/loc2.jpg" width="85" height="57" alt="Top Location Image"></Image>
                            </figure>
                            <figcaption>
                                <p className="name">Business Bay</p>
                                <p>221 Projects in Business Bay, Dubai</p> 
                            </figcaption>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="loc_wrapper">
                        <div className="loc_col">
                            <figure>
                                <Image src="/assets/images/property/loc1.jpg" width="85" height="57" alt="Top Location Image"></Image>
                            </figure>
                            <figcaption>
                                <p className="name">Dubai Marina, Dubai</p>
                                <p>221 Projects in Business Bay, Dubai</p>
                            </figcaption>
                        </div>
                        <div className="loc_col">
                            <figure>
                                <Image src="/assets/images/property/loc2.jpg" width="85" height="57" alt="Top Location Image"></Image>
                            </figure>
                            <figcaption>
                                <p className="name">Business Bay</p>
                                <p>221 Projects in Business Bay, Dubai</p> 
                            </figcaption>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="loc_wrapper">
                        <div className="loc_col">
                            <figure>
                                <Image src="/assets/images/property/loc1.jpg" width="85" height="57" alt="Top Location Image"></Image>
                            </figure>
                            <figcaption>
                                <p className="name">Dubai Marina, Dubai</p>
                                <p>221 Projects in Business Bay, Dubai</p>
                            </figcaption>
                        </div>
                        <div className="loc_col">
                            <figure>
                                <Image src="/assets/images/property/loc2.jpg" width="85" height="57" alt="Top Location Image"></Image>
                            </figure>
                            <figcaption>
                                <p className="name">Business Bay</p>
                                <p>221 Projects in Business Bay, Dubai</p> 
                            </figcaption>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}