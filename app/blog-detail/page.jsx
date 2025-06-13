"use client"
import Image from "next/image"
import "../../styles/blogs/blogs.css"
import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"
import { Navigation, Pagination } from "swiper/modules"
import BlogItem from "@/components/BlogItem";
export default function BlogDetail(){
    const swiperRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if(swiperRef.current?.navigation) {
                swiperRef.current.navigation.update();
            }
        }, 100);
    }, [])
    useEffect(() => {
        const toggleIcons = document.querySelector('.share-btn-ico')
        const toggleList = document.querySelector('.side_ico-m')
        const handleClick = () => {
            toggleList.classList.toggle('open')
        }
        toggleIcons.addEventListener('click', handleClick)

        return () => {
            toggleIcons.removeEventListener('click', handleClick)
        }
    }, [])
    return(
        <main>
            <div className="banner blog-detail-banner">
                <div className="bg">
                <Image src="/assets/images/property/property-listing-banner.jpg" width="1512" height="700" alt="Detail Banner" />
                </div>
                <div className="banner-wrapper">
                <div className="container">
                    <div className="content">
                    <p className="lctn clndr">
                        07 May, 2025
                    </p>
                    <h1>
                        How Rising Interest Rates Are Affecting Home Buyers and Sellers
                    </h1>
                    </div>
                </div>
                </div>
                <div className="share_btn">
                <button type="button" className="share-btn-ico">
                    <svg
                    width={32}
                    height={36}
                    viewBox="0 0 32 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M26.8358 35.25C25.5657 35.25 24.4879 34.806 23.6024 33.9179C22.7182 33.0286 22.2761 31.9489 22.2761 30.6787C22.2761 30.4871 22.3604 30.0034 22.5291 29.2278L8.73483 21.0379C8.32083 21.5158 7.8142 21.8908 7.21492 22.163C6.61564 22.4352 5.97228 22.5713 5.28483 22.5713C4.02495 22.5713 2.95417 22.1227 2.0725 21.2257C1.19083 20.3287 0.75 19.2535 0.75 18C0.75 16.7465 1.19083 15.6713 2.0725 14.7743C2.95417 13.8773 4.02495 13.4287 5.28483 13.4287C5.971 13.4287 6.61436 13.5648 7.21492 13.837C7.81547 14.1092 8.32211 14.4848 8.73483 14.964L22.531 6.80858C22.4416 6.56069 22.377 6.31472 22.3374 6.07067C22.2965 5.82533 22.2761 5.57489 22.2761 5.31933C22.2761 4.0505 22.7214 2.97142 23.612 2.08208C24.5026 1.19403 25.5836 0.75 26.855 0.75C28.1264 0.75 29.2048 1.19531 30.0903 2.08592C30.9758 2.97653 31.4179 4.05753 31.4167 5.32892C31.4154 6.60031 30.9714 7.67875 30.0846 8.56425C29.1978 9.44975 28.1181 9.89186 26.8454 9.89058C26.1529 9.89058 25.514 9.74875 24.9288 9.46508C24.3435 9.18142 23.8452 8.8 23.4338 8.32083L9.63567 16.5107C9.72511 16.7586 9.78964 17.0053 9.82925 17.2506C9.87014 17.4946 9.89058 17.7444 9.89058 18C9.89058 18.2556 9.87014 18.5054 9.82925 18.7494C9.78836 18.9935 9.72447 19.2401 9.63758 19.4893L23.4338 27.6792C23.8465 27.2 24.3448 26.8186 24.9288 26.5349C25.514 26.2512 26.1529 26.1094 26.8454 26.1094C28.1155 26.1094 29.1953 26.5541 30.0846 27.4434C30.9726 28.3353 31.4167 29.4169 31.4167 30.6883C31.4167 31.9597 30.9714 33.0382 30.0807 33.9237C29.1901 34.8092 28.1072 35.2513 26.8358 35.25Z"
                        fill="url(#paint0_linear_125_1667)"
                    />
                    <defs>
                        <linearGradient
                        id="paint0_linear_125_1667"
                        x1="0.75"
                        y1={18}
                        x2="31.4167"
                        y2={18}
                        gradientUnits="userSpaceOnUse"
                        >
                        <stop stopColor="#FAA673" />
                        <stop offset={1} stopColor="#A06242" />
                        </linearGradient>
                    </defs>
                    </svg>
                </button>
                <ul className="side_ico-m">
                    <li>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        {" "}
                        <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z" />{" "}
                        </svg>{" "}
                    </a>{" "}
                    </li>
                    <li>
                    <a href="">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        >
                        {" "}
                        <title>Twitter</title>{" "}
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />{" "}
                        </svg>{" "}
                    </a>{" "}
                    </li>
                    <li>
                    <a href="">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        >
                        {" "}
                        <title>LinkedIn</title>{" "}
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />{" "}
                        </svg>{" "}
                    </a>{" "}
                    </li>
                </ul>
                </div>
            </div>
            <section>
                <div className="blog-detail-secA dark_bg sec-pad">
                <div className="container">
                    <div className="website-content">
                    <h2>Lorem Ipsum</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
                        bibendum nisl. Nullam turpis magna, vulputate vel scelerisque in,
                        euismod in nibh. Suspendisse sit amet urna ullamcorper, lobortis
                        nibh sit amet, consequat purus. Mauris varius auctor nulla sit amet
                        sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla vestibulum felis eget viverra rhoncus. Morbi sit amet enim
                        rutrum, tincidunt odio ac, volutpat lorem. Aenean diam erat, tempus
                        sit amet nisi a, feugiat interdum leo. Sed dictum, sapien eu
                        consequat dignissim, elit felis pharetra orci, at vestibulum neque
                        urna sed orci. Aenean id sem ornare, accumsan enim commodo, eleifend
                        mauris. Morbi mauris odio, efficitur a condimentum a, lobortis sed
                        sapien. Quisque auctor mi vitae odio scelerisque maximus.
                    </p>
                    <p>
                        Fusce id tellus nec est bibendum sollicitudin id et magna. Ut
                        sodales odio vel tristique ultrices. Nunc interdum tellus nec ante
                        malesuada cursus. Fusce suscipit, quam sed varius tristique, lorem
                        eros tempus purus, eget porta justo nulla ut purus. Nullam pretium
                        augue nec massa luctus, at eleifend justo volutpat. Integer et nulla
                        in nulla vestibulum vulputate. Maecenas diam augue, gravida in
                        posuere vitae, tincidunt mollis lectus. Ut mattis quis nunc eget
                        fringilla. Ut rhoncus nunc nibh, quis vulputate lorem varius vel.
                        Nunc a leo ac velit laoreet pellentesque sed sit amet metus. Aenean
                        eu blandit velit. Vestibulum ut ex pharetra, consequat ligula et,
                        semper eros.
                    </p>
                    <p>
                        Nulla vitae nunc ligula. Phasellus ut turpis eget nulla viverra
                        dapibus eget quis sapien. In hac habitasse platea dictumst. Nulla
                        facilisi. Donec viverra lobortis tortor et sollicitudin. Sed
                        placerat nunc a ante elementum, sit amet consectetur massa posuere.
                        Integer eu nisi ut eros iaculis varius non non nisl. Integer sed
                        magna lacus. Nullam faucibus, velit at elementum aliquam, enim
                        libero condimentum ipsum, at suscipit enim metus ac neque. Mauris
                        pulvinar mi tortor, vel sollicitudin nulla rhoncus quis. In hac
                        habitasse platea dictumst. Etiam lacinia, massa eu aliquet luctus,
                        nunc erat rutrum elit, ac maximus massa massa et neque. Pellentesque
                        consectetur, velit sed malesuada rutrum, leo lacus convallis tortor,
                        sit amet cursus nunc urna nec felis.
                    </p>
                    <h3>Phasellus ut turpis eget nulla</h3>
                    <p>
                        <b>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit:
                        </b>
                    </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>In vel lectus in lacus elementum sollicitudin id vitae est.</li>
                        <li>Vestibulum molestie turpis eu lacus finibus lacinia.</li>
                        <li>Donec sed justo ut nibh lobortis efficitur.</li>
                        <li>Quisque quis neque a mauris consectetur molestie.</li>
                        <li>Sed commodo mi a varius auctor.</li>
                        <li>Ut accumsan enim sit amet molestie consequat.</li>
                        <li>
                        Nunc at purus aliquet, consequat sem tincidunt, tristique lacus.
                        </li>
                        <li>Etiam a elit a metus fringilla maximus nec et felis.</li>
                    </ul>
                    <h5>Sed dictum, sapien eu consequat dignissim</h5>
                    <p>
                        Fusce id tellus nec est bibendum sollicitudin id et magna. Ut
                        sodales odio vel tristique ultrices. Nunc interdum tellus nec ante
                        malesuada cursus. Fusce suscipit, quam sed varius tristique, lorem
                        eros tempus purus, eget porta justo nulla ut purus. Nullam pretium
                        augue nec massa luctus, at eleifend justo volutpat. Integer et nulla
                        in nulla vestibulum vulputate. Maecenas diam augue, gravida in
                        posuere vitae, tincidunt mollis lectus. Ut mattis quis nunc eget
                        fringilla. Ut rhoncus nunc nibh, quis vulputate lorem varius vel.
                        Nunc a leo ac velit laoreet pellentesque sed sit amet metus. Aenean
                        eu blandit velit. Vestibulum ut ex pharetra, consequat ligula et,
                        semper eros.
                    </p>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <div className="blog-detail-secB gray_bg sec-pad">
                   <div className="container">
                     <div className="upper-sec">
                        <div className="heading">
                            <h2>Related Blogs</h2>
                        </div>
                        <div className="slider-nav">
                            <button className="more-prev swiper-prev primary-border">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                >
                                <path
                                    fill="none"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14 7l-5 5l5 5"
                                    strokeWidth="1"
                                />
                                </svg>
                            </button>
                            <div className="fraction"></div>
                            <button className="more-next swiper-next primary-border">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                >
                                <path
                                    fill="none"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m10 17l5-5l-5-5"
                                    strokeWidth="1"
                                />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <Swiper
                        className="more-blogs-slider"
                        ref={swiperRef}
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        speed={1000}
                        pagination={{
                        enabled: true,
                        el: ".fraction",
                        type: "fraction",
                        }}
                        navigation={{
                        prevEl: ".more-prev",
                        nextEl: ".more-next",
                        }}
                        breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },
                        540: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    > 
                        <SwiperSlide>
                            <BlogItem 
                                imgSrc="/assets/images/other/project1.jpg"
                                date="5 Sep, 2024"
                                desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem 
                                imgSrc="/assets/images/other/project1.jpg"
                                date="5 Sep, 2024"
                                desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem 
                                imgSrc="/assets/images/other/project1.jpg"
                                date="5 Sep, 2024"
                                desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem 
                                imgSrc="/assets/images/other/project1.jpg"
                                date="5 Sep, 2024"
                                desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem 
                                imgSrc="/assets/images/other/project1.jpg"
                                date="5 Sep, 2024"
                                desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                            />
                        </SwiperSlide>
                    </Swiper>
                   </div>
                </div>
            </section>
        </main>
    )
}