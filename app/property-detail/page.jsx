"use client"
import Image from "next/image";
import "../../styles/property/property.css"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"; 
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Fancybox } from "@fancyapps/ui";
import { useEffect, useRef } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import PropertyCol from "@/components/PropertyCol";


export default function PropertyDetail(){
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);
  useEffect(() => {
        Fancybox.bind("[data-fancybox]", {}); // Initialize Fancybox
    }, []);
    return (
      <main>
        <div className="banner property-detail-banner">
          <div className="bg">
            <Image
              src="/assets/images/property/property-listing-banner.jpg"
              alt="Banner Image"
              width="1512"
              height="700"
            />
          </div>
          <div className="banner-wrapper">
            <div className="container">
              <div className="flex">
                <div className="colA">
                  <div className="content">
                    <h1>Dubai Hills Estate</h1>
                    <p className="lctn">Downtown Dubai</p>
                  </div>
                </div>
                <div className="colB">
                  <ul>
                    <li>
                      <p>Properties</p>
                      <h6>1 to 6 Bedroom Apartments</h6>
                    </li>
                    <li>
                      <p>Prices From</p>
                      <h6>AED 2,758,888</h6>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn enqr-btn"
                    onClick={() => {
                      document
                        .querySelector(".enquire-pop")
                        .classList.add("is-open");
                      document
                        .querySelector(".overlay")
                        .classList.add("is-open");
                      document
                        .querySelector("body")
                        .classList.add("overflow-hidden");
                    }}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="prop-detail-secA dark_bg">
            <div className="container">
              <div className="flex">
                <div className="colA">
                  <div className="heading h-medium">
                    <h3>Beyond Luxury, A Lifestyle</h3>
                    <p>
                      Step into a sanctuary where contemporary luxury merges
                      with vibrant urban living. Designed for modern lifestyles,
                      Address Residences Dubai Hills Estate offers the finest in
                      branded residential comfort and elegance. Your luxurious
                      home, in the signature style of Address Hotels + Resorts,
                      awaits you.
                    </p>
                  </div>
                  <div className="btn-div">
                    <Link href="javascript:;" className="btn">
                      Download Brochure
                    </Link>
                    <Link href="javascript:;" className="btn btn-btn">
                      Download Floor Plan
                    </Link>
                  </div>
                </div>
                <div className="colB">
                  <figure>
                    <Image
                      src="/assets/images/other/property-detail.jpg"
                      width="538"
                      height="394"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="prop-detail-secB item-md">
            <figure
              style={{
                backgroundImage:
                  "url('/assets/images/other/proprty-detail-2.jpg')",
              }}
            >
              <Image
                src="/assets/images/other/proprty-detail-2.jpg"
                width="1512"
                height="750"
                alt="Connected Living"
              />
            </figure>
            <figcaption>
              <div className="container">
                <div className="heading h-medium c-white">
                  <h3>Connected Living</h3>
                  <p>
                    Situated in the lively Dubai Hills Estate, enjoy easy access
                    to Al Khail Road, Dubai Hills Mall, Dubai Hills Park, and
                    top-tier healthcare and education. Everything you need is
                    just a stone's throw away.
                  </p>
                </div>
              </div>
            </figcaption>
          </div>
        </section>
        <section>
          <div className="prop-detail-secA prop-detail-secC gray_bg">
            <div className="container">
              <div className="flex">
                <div className="colA">
                  <div className="heading h-medium">
                    <h3>Central Elegance</h3>
                    <p>
                      Experience luxury—strategically positioned, yet distant
                      from the city's hustle. Thanks to Al Khail Road, Downtown
                      Dubai and major hubs are minutes away. Soon, Etihad Rail
                      and Dubai Metro will offer swift airport and emirate
                      connections.
                    </p>
                  </div>
                  <ul className="loc-advan">
                    <li>
                      <h5>12 mins </h5>
                      <p>to Downtown Dubai</p>
                    </li>
                    <li>
                      <h5>15 mins </h5>
                      <p>to Dubai Marina</p>
                    </li>
                    <li>
                      <h5>20 mins</h5>
                      <p>
                        to Dubai Int'l Airport &amp; AI Maktoum Int'l Airport
                      </p>
                    </li>
                    <li>
                      <h5>20 mins </h5>
                      <p>
                        to Direct 2020 Strategically Place, Distinctly Elegant.
                      </p>
                    </li>
                  </ul>
                  <div className="btn-div">
                    <a href="" className="btn">
                      View on google maps
                    </a>
                    <button type="button" className="btn btn-btn">
                      Enquire Now
                    </button>
                  </div>
                </div>
                <div className="colB">
                  <figure>
                    <img
                      src="assets/images/other/proprty-detail-3.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="prop-detail-secD dark_bg">
            <div className="container">
              <div className="heading">
                <h3>Amenities</h3>
                <p>
                  Address Residences Dubai Hills Estate blends modern comforts
                  with nature's charm. Enjoy the landscaped podium with green
                  vistas, state-of-the-art fitness centres, playful areas for
                  kids, and 24/7 security. Experience the rooftop garden with
                  its outdoor cinema, an enchanting space for relaxation and
                  entertainment.
                </p>
              </div>
              <div className="amenity-grid-wrap">
                <div className="col-md">
                  <div className="ico">
                    <img src="assets/icon/amenities/podium.svg" alt="" />
                  </div>
                  <h6>Landscaped Podium Deck</h6>
                </div>
                <div className="col-md">
                  <div className="ico">
                    <img
                      src="assets/icon/amenities/rooftop-garden.svg"
                      alt=""
                    />
                  </div>
                  <h6>Rooftop Garden</h6>
                </div>
                <div className="col-md">
                  <div className="ico">
                    <img
                      src="assets/icon/amenities/rooftop-cinema.svg"
                      alt=""
                    />
                  </div>
                  <h6>Outdoor Rooftop Cinema</h6>
                </div>
                <div className="col-md">
                  <div className="ico">
                    <img src="assets/icon/amenities/yoga.svg" alt="" />
                  </div>
                  <h6>Outdoor Yoga Area</h6>
                </div>
                <div className="col-md">
                  <div className="ico">
                    <img src="assets/icon/amenities/pool.svg" alt="" />
                  </div>
                  <h6>Pool deck</h6>
                </div>
                <div className="col-md">
                  <div className="ico">
                    <img src="assets/icon/amenities/kid.svg" alt="" />
                  </div>
                  <h6>Kids' playground</h6>
                </div>
                <div className="col-md">
                  <div className="ico">
                    <img src="assets/icon/amenities/sport.svg" alt="" />
                  </div>
                  <h6>Multipurpose Sports Court</h6>
                </div>
                <div className="col-md">
                  <div className="ico">
                    <img src="assets/icon/amenities/gym.svg" alt="" />
                  </div>
                  <h6>Fitness centres in each tower</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="prop-detail-secE">
            <video
              playsInline
              src="/assets/video/video3.mp4"
              autoPlay
              muted
              loop
              width="100%"
              height={600}
            ></video>
          </div>
        </section>
        <section>
          <div className="prop-detail-secG sec-pad gray_bg">
            <div className="container">
              <div className="heading">
                <h3>Project Gallery</h3>
                <div className="slider-nav">
                  <button className="gallery-prev swiper-prev primary-border">
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
                  <button className="gallery-next swiper-next primary-border">
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
                className="gallery-slider"
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
                  prevEl: ".gallery-prev",
                  nextEl: ".gallery-next",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                  },
                  540: {
                    slidesPerView: 2,
                  },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                <SwiperSlide>
                  <a
                    href="/assets/images/other/gallery1.jpg"
                    data-fancybox="gallery"
                  >
                    <img
                      src="/assets/images/other/gallery1.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href="/assets/images/other/gallery2.jpg"
                    data-fancybox="gallery"
                  >
                    <img
                      src="/assets/images/other/gallery2.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href="/assets/images/other/gallery1.jpg"
                    data-fancybox="gallery"
                  >
                    <img
                      src="/assets/images/other/gallery1.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    href="/assets/images/other/gallery2.jpg"
                    data-fancybox="gallery"
                  >
                    <img
                      src="/assets/images/other/gallery2.jpg"
                      alt="Thumbnail"
                    />
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section>
          <div className="prop-detail-secH">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14036.766906392879!2d77.05313366724943!3d28.413471125111595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23fa3cf17213%3A0xf4533d0aee13b674!2sPrettify%20Creative%20%7C%20Graphic%20Designer%20Gurgaon%20%7C%20Logo%20Designer%20in%20Gurgaon%20%7C%20Web%20Designer%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1749453649044!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <section>
          <div className="prop-detail-secI slider-section sec-pad dark_bg">
            <div className="container">
              <div className="upper-sec">
                <div className="heading">
                  <h3>More Projects</h3>
                  <p>
                    Discover the outstanding range of Dubai properties only with
                    Sadan
                  </p>
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
                  <div className="fraction2"></div>
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
                className="more-slider"
                ref={swiperRef2}
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                speed={1000}
                pagination={{
                  enabled: true,
                  el: ".fraction2",
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
                onSwiper={(swiper) => (swiperRef2.current = swiper)}
              >
                <SwiperSlide>
                  <PropertyCol
                      imgSrc = "/assets/images/other/project1.jpg"
                      PropName = "Pearl House III"
                      PropLoc = "JVC, United Arab Emirates"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PropertyCol
                      imgSrc = "/assets/images/other/project2.jpg"
                      PropName = "Vardon Villa Compound"
                      PropLoc = "Damac Hills"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PropertyCol
                      imgSrc = "/assets/images/other/project3.jpg"
                      PropName = "Pearl House II"
                      PropLoc = "JVC, United Arab Emirates"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PropertyCol
                      imgSrc = "/assets/images/other/project1.jpg"
                      PropName = "Vardon Villa Compound"
                      PropLoc = "Damac Hills"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PropertyCol
                      imgSrc = "/assets/images/other/project2.jpg"
                      PropName = "Pearl House I"
                      PropLoc = "JVC, United Arab Emirates"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </main>
    );
}