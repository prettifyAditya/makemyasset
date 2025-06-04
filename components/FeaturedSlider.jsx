import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import Image from "next/image";

const featureData = [
    {   
        proImage: "/assets/images/related/related1.jpg",
        proName : "Emaar Beachfront",
        proLoc: "Dubai",
        details: {
            info1: {
                title: "Project Size",
                size: "2560 sqft"
            },
            info2: {
                title: "Configurations",
                size: "2,3 BHK Apartments"
            }
        },
        price: "From AED 5,615,888",
    },
    {   
        proImage: "/assets/images/related/related1.jpg",
        proName : "Emaar Premium Beachfront",
        proLoc: "Qatar",
        details: {
            info1: {
                title: "Project Size",
                size: "1600 sqft"
            },
            info2: {
                title: "Configurations",
                size: "3 BHK Apartments"
            }
        },
        price: "From AED 615,888",
    }
]

export default function FeaturedSlider(){
    const swiperRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
        if (swiperRef.current?.navigation) {
            swiperRef.current.navigation.update();
        }
        }, 100)
    }, [])
    return(
        <div className="related-slider-wrapper">
            <Swiper
                className="related-slider"
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                speed={1000}
                navigation={{
                    prevEl: ".related-prev",
                    nextEl: ".related-next"
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)} 
            >
                <div className="swiper-nav related-nav">
                    <button className="related-prev swiper-prev primary-border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                    <button className="related-next swiper-next primary-border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
                </div>
                {featureData.map((feature, item) => (
                    <SwiperSlide key={item}>
                    <div className="feature_col">
                        <figcaption>
                            <h3>{feature.proName}</h3>
                            <p className="loc">{feature.proLoc}</p>
                            <div className="details">
                                <div className="info">
                                    <p className="title">{feature.details.info1.title}</p>
                                    <p>{feature.details.info1.size}</p>
                                </div>
                                <div className="info">
                                    <p className="title">{feature.details.info2.title}</p>
                                    <p>{feature.details.info2.size}</p>
                                </div>
                            </div>
                            <h3 className="price">{feature.price}</h3>
                            <div className="btn_wrapper">
                                <button type="button" className="btn" onClick={() => {
                                document.querySelector('.enquire-pop').classList.add('is-open')
                                document.querySelector('.overlay').classList.add('is-open')
                                document.querySelector('body').classList.add('overflow-hidden')
                            }}>
                            <img src="/assets/icon/call.svg" alt="Call Icon" />Get a call back</button>
                                <a href="javascript:;" className="btn white"><img src="/assets/icon/whatsapp.svg" alt="Whatsapp Icon" />Whatsapp</a>
                            </div>
                        </figcaption>
                        <figure>
                            <Image src={feature.proImage} width="640" height="504" alt="Related Project"></Image>
                        </figure>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}