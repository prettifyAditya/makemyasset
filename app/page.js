"use client"
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";
import "/styles/home/home.css"
import { useState } from "react";
import PropertyCol from "@/components/PropertyCol";
import PropertySlider from "@/components/PropertySlider";
import FeaturedSlider from "@/components/FeaturedSlider";
import TopLocation from "@/components/TopLocation";

const customStyles = {
  control: (base, state) => ({
      ...base,
      width: "100%",
      height: "100%",
      color: "#fff",
      backgroundColor: "none",
      border: "none",
      borderRadius: "none",
      borderBottom: state.isFocused ? "1px solid var(--primary)" : "1px solid #616161",
      boxShadow: state.isFocused ? "none" : "none",
  }),
  label: (base, state) => ({
    ...base,
    display: "none"
  }),
  valueContainer: (base) => ({
      ...base,
      height: "100%",
      color: "#fff"
    }),
  input: (base, state) => ({
      ...base,
      width: "100%",
      height: "40px",
      color: "#fff",
      minHeight: "100%",
      minWidth: "100%"
  }),
  placeholder: (base, state) => ({
      ...base,
      color: "#9C9A9A",
      fontFamily: "Circular"
  }),
  option: (base, state) => ({
      ...base,
      width: "100%",
      background: state.isFocused ? "var(--gradient-a)" : "#fff",
      marginBottom: "5px",
      fontSize: "16px",
      padding: "3px 10px",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        color: "#fff"
      }
    }),
  menu: (base) => ({
  ...base,
  zIndex: 10,
  width: "200px"
  })
}

const selectOptions = [
  {
    key: "country",
    placeholder: "Country",
    options : [
    { value: "India", label: "India"},
    { value: "Nigeria", label: "Nigeria"},
    { value: "Africa", label: "Africa"},
    { value: "Oman", label: "Oman"},
  ],
  },
  {
    key: "allCities",
    placeholder: "All Cities",
    options: [
    { value: "New Delhi", label: "New Delhi" },
    { value: "Lagos",   label: "Lagos" },
    { value: "Cairo",   label: "Cairo" },
    { value: "Muscat",  label: "Muscat" },
  ],
  },
  {
    key: "property",
    placeholder: "Property Type",
    options: [
      { value: "Residential",    label: "Residential" },
      { value: "Commericial",  label: "Commericial" },
      { value: "SCO Plots",  label: "SCO Plots" },
    ],
  },
  {
    key: "builder",
    placeholder: "Builders",
    options: [
      { value: "Private",    label: "Private" },
      { value: "M3M",  label: "M3M" },
      { value: "Trinity",  label: "Trinity" },
    ],
  },

]

export default function Home() {
  const initialSelected = selectOptions.reduce(
    (acc, { key }) => ({ ...acc, [key]: null}),
    {}
  )
  const [selected, setSelected] = useState(initialSelected)
  const handleChange = (key) => (value) => {
    setSelected((prev) => ({
      ...prev,
      [key]: value,
    }))
  }
  return (
    <main>
      <div className="banner home-banner">
        <div className="bg">
          <Image src="/assets/images/home/hero_banner.jpg" width="1280" height="700" alt="Banner Image"></Image>
        </div>
        <div className="banner-wrapper">
          <div className="content">
            <div className="colA">
              <h6>Invest with Confidence</h6>
              <h1>Live with Joy</h1>
            </div>
            <div className="colB">
              <ul>
                <li><Link href="javascript:;" className="active">Residential</Link></li>
                <li><Link href="javascript:;">Commercial</Link></li>
                <li><Link href="javascript:;">SCO Plots</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="figure-wrapper">
          <div className="bg_video">
            <video src="/assets/video/hero-video.mp4" autoPlay muted loop playsInline></video>
          </div>
        </div>
      </div>
      <section>
        <div className="home-secA sec-pad dark_bg">
          <div className="container">
            <div className="heading">
              <h3>Search Properties</h3>
              <div className="upper_nav flex">
                {selectOptions.map(({ key, placeholder, options}) => (
                    <Select key={key} placeholder={placeholder} options={options} value={selected[key]} onChange={handleChange(key)} styles={customStyles} components={{ IndicatorSeparator: () => null }} />
                ))}
                  <button type="button" className="btn">
                    Find Property
                  </button>
              </div>
            </div>
            <div className="slider_sec">
                <PropertySlider /> 
                <Link className="grad flex justify-center gap5" href="javascript:;">View all Properties <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6"></path></svg></Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-secB sec-pad gray_bg">
          <div className="container">
            <div className="heading">
              <h3>featured properties</h3>
            </div>
            <div className="featured_sec">
              <FeaturedSlider />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-secC sec-pad dark_bg">
          <div className="container">
            <div className="heading">
              <h3>Top location in Dubai</h3>
            </div>
            <div className="top_location">
              <TopLocation />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="home-secD banner">
            <div className="bg">
              <video src="/assets/video/home-secD.mp4" autoPlay muted loop playsInline></video>
            </div>
            <div className="banner-wrapper center">
              <div className="content">
                <div className="icon">
                  <img src="/assets/icon/window.svg" alt="window icon" />
                </div>
                <h3>Make My Assets</h3>
                <p>Lorem ipsum dolor sit amet consectetur. At tellus sed eu ullamcorper rhoncus blandit. Facilisis vitae consectetur purus turpis lorem scelerisque sapien neque natoque. Amet arcu sed massa morbi.</p>
                <Link href="javascript:;" className="grad flex justify-center gap5">Read more <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6"></path></svg></Link>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
}
