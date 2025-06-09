"use client"
import Image from "next/image"
import "../../styles/property/property.css"
import { useState } from "react"
import MySelect from "@/components/MySelect"
import PropertyItem from "@/components/PropertyItem"

const options_Cities = [
  { value: "New Delhi", label: "New Delhi" },
  { value: "Lagos",   label: "Lagos" },
  { value: "Cairo",   label: "Cairo" },
  { value: "Muscat",  label: "Muscat" },
]

const options_property = [
  { value: "Residential",    label: "Residential" },
  { value: "Commericial",  label: "Commericial" },
  { value: "SCO Plots",  label: "SCO Plots" },
]

const ProjectData = [
    {
        imgSrc: "/assets/images/other/project4.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project5.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project6.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project4.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project5.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project6.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project4.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project5.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project6.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project4.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project5.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
    {
        imgSrc: "/assets/images/other/project6.jpg",
        title: "Address Residences Fountain Views by Emaar Properties",
        address: "Sector 44, Gurgaon",
        price: "AED 7,900,000",
        area: "771 sqft"
    },
]

export default function PropertyListing(){
    const [city, setCity] = useState(null);
    const [city2, setCity2] = useState(null);
    const [property, setProperty] = useState(null);
    return (
      <main>
        <div className="banner property-listing-banner">
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
              <div className="content text-center">
                <h1>Properties in Dubai</h1>
                <p>
                  With an excellent track record of dealing with high-end
                  properties in Dubai we are now expanding our presence to INDIA
                </p>
              </div>
              <div className="search-form-wrap">
                <div className="form">
                    <MySelect
                        id="city-select"
                        placeholder="All Cities"
                        options={options_Cities}
                        selectedValue={city}
                        onValueChange={setCity}
                    />
                    <MySelect
                        id="property-select"
                        placeholder="Property Type"
                        options={options_property}
                        selectedValue={property}
                        onValueChange={setProperty}
                    />
                    <MySelect
                        id="rera-select"
                        placeholder="Enter a location, builder, project or RERA ID"
                        options={options_Cities}
                        selectedValue={city2}
                        onValueChange={setCity2}
                    />
                  <button type="submit" className="btn">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
            <div className="prop-list-secA sec-pad gray_bg">
                <div className="container">
                    <div className="common-grid prop-list-grid">
                        {
                            ProjectData.map((property, index)=> (
                                <PropertyItem key={index} {...property} />
                                // <PropertyItem key={index} imgSrc={property.imgSrc} title={property.title} address={property.address} price={property.price} area={property.area} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
      </main>
    );
}