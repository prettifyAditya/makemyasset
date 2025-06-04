"use client"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import PropertyCol from "./PropertyCol";


export default function LuxuryTabbing(){
    const [activeTab, setActiveTab] = useState("tab1")
    const swiperRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.navigation){
            swiperRef.current.navigation.update()
            }
        }, 100)
    }, [])
    return(
        <>
            <div className="upper_sec">
                <h3>luxury properties</h3>
                <ul className="tab-nav luxury-tab-nav flex">
                    <li data-tab="tab1" className={activeTab === "tab1" ? "active" : ""} onClick={() => setActiveTab("tab1")}>Residential</li>
                    <li data-tab="tab2" className={activeTab === "tab2" ? "active" : ""} onClick={() => setActiveTab("tab2")}>Commercial</li>
                    <li data-tab="tab3" className={activeTab === "tab3" ? "active" : ""} onClick={() => setActiveTab("tab3")}>SCO Plots</li>
                    <li data-tab="tab4" className={activeTab === "tab4" ? "active" : ""} onClick={() => setActiveTab("tab4")}>New Launches</li>
                </ul>
            </div>
            <div className="luxury-tav-nav-content tab-nav-content">
                <div className={`tabs ${activeTab === "tab1" ? "active" : ""}`} data-tab="tab1">
                    <div className="luxury_wrapper">
                        <div className="swiper-nav luxury-nav center-full hide-btn-no-loop">
                            <button className="luxury-prev swiper-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                            <button className="luxury-next swiper-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
                        </div>
                        <Swiper
                            className="luxury_slider"
                            ref={swiperRef}
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            speed={1000}
                            navigation={{
                                prevEl: ".luxury-prev",
                                nextEl: ".luxury-next"
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
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className={`tabs ${activeTab === "tab2" ? "active" : ""}`} data-tab="tab2">
                    <div className="luxury_wrapper">
                        <div className="swiper-nav luxury-nav center-full hide-btn-no-loop">
                            <button className="luxury-prev swiper-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                            <button className="luxury-next swiper-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
                        </div>
                        <Swiper
                            className="luxury_slider"
                            ref={swiperRef}
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            speed={1000}
                            navigation={{
                                prevEl: ".luxury-prev",
                                nextEl: ".luxury-next"
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
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className={`tabs ${activeTab === "tab3" ? "active" : ""}`} data-tab="tab3">
                    <div className="luxury_wrapper">
                        <div className="swiper-nav luxury-nav center-full hide-btn-no-loop">
                            <button className="luxury-prev swiper-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                            <button className="luxury-next swiper-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
                        </div>
                        <Swiper
                            className="luxury_slider"
                            ref={swiperRef}
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            speed={1000}
                            navigation={{
                                prevEl: ".luxury-prev",
                                nextEl: ".luxury-next"
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
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className={`tabs ${activeTab === "tab4" ? "active" : ""}`} data-tab="tab4">
                    <div className="luxury_wrapper">
                        <div className="swiper-nav luxury-nav center-full hide-btn-no-loop">
                            <button className="luxury-prev swiper-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg></button>
                            <button className="luxury-next swiper-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg></button>
                        </div>
                        <Swiper
                            className="luxury_slider"
                            ref={swiperRef}
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            speed={1000}
                            navigation={{
                                prevEl: ".luxury-prev",
                                nextEl: ".luxury-next"
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
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <PropertyCol
                                    imgSrc = "/assets/images/property/property1.jpg"
                                    PropName = "Vardon Villa Compound"
                                    PropLoc = "Damac Hills"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}