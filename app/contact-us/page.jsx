"use client"
import MySelect from "@/components/MySelect";
import "../../styles/contact/contact.css"
import { useState } from "react";
const options_Budget = [
  { value: "Under ₹ 50 Lac", label: "Under ₹ 50 Lac"},
  { value: "₹ 50 Lac to ₹ 80 Lac", label: "₹ 50 Lac to ₹ 80 Lac"},
  { value: "₹ 80 Lac to ₹ 1 Cr", label: "₹ 80 Lac to ₹ 1 Cr"},
  { value: "₹ 1 Cr to ₹ 10 Cr", label: "₹ 1 Cr to ₹ 10 Cr"},
  { value: "₹ 10 Cr  and above", label: "₹ 10 Cr  and above"},
]
export default function ContactUs(){
    const [budget, setBudget] = useState("What's your Budget")
    return (
      <main>
        <div className="banner contact-banner">
          <div className="bg">
            <video
              src="/assets/video/video4.mp4"
              playsInline
              autoPlay
              muted
              loop
              width="100%"
              height={600}
              poster="/assets/video/video4-poster.jpg"
              type="video/mp4"
            ></video>
          </div>
          <div className="banner-wrapper">
            <div className="container">
              <div className="content text-center">
                <h1>contact us</h1>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="contact-secA sec-pad gray_bg">
            <div className="container flex">
                <div className="figure-wrapper">
                    <div className="bg_video">
                        <video src="/assets/video/hero-video.mp4" autoPlay muted loop playsInline></video>
                    </div>
                </div>
              <div className="content">
                <div className="heading">
                  <h3>Make My Asset</h3>
                </div>
                <div className="contact-inf">
                  <a href="" className="col-md">
                    <div className="ico">
                      <svg
                        width={36}
                        height={35}
                        viewBox="0 0 36 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 3.28125C12.5654 3.28125 8.15625 7.47783 8.15625 12.6465C8.15625 18.5938 14.7188 28.0185 17.1284 31.2737C17.2284 31.4111 17.3595 31.523 17.511 31.6001C17.6625 31.6772 17.83 31.7173 18 31.7173C18.17 31.7173 18.3375 31.6772 18.489 31.6001C18.6405 31.523 18.7716 31.4111 18.8716 31.2737C21.2812 28.0198 27.8438 18.5985 27.8438 12.6465C27.8438 7.47783 23.4346 3.28125 18 3.28125Z"
                          stroke="url(#paint0_linear_120_1403)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18 16.4062C19.8122 16.4062 21.2812 14.9372 21.2812 13.125C21.2812 11.3128 19.8122 9.84375 18 9.84375C16.1878 9.84375 14.7188 11.3128 14.7188 13.125C14.7188 14.9372 16.1878 16.4062 18 16.4062Z"
                          stroke="url(#paint1_linear_120_1403)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_120_1403"
                            x1="8.15625"
                            y1="17.4993"
                            x2="27.8438"
                            y2="17.4993"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FAA673" />
                            <stop offset={1} stopColor="#A06242" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_120_1403"
                            x1="14.7188"
                            y1="13.125"
                            x2="21.2812"
                            y2="13.125"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FAA673" />
                            <stop offset={1} stopColor="#A06242" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h6>Golf course road, Gurugram.</h6>
                  </a>
                  <a
                    href="mailto:info@makemyasset.com"
                    className="col-md"
                  >
                    <div className="ico">
                      <svg
                        width={33}
                        height={32}
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.5 6H4.5C3.96957 6 3.46086 6.21071 3.08579 6.58579C2.71071 6.96086 2.5 7.46957 2.5 8V24C2.5 24.5304 2.71071 25.0391 3.08579 25.4142C3.46086 25.7893 3.96957 26 4.5 26H28.5C29.0304 26 29.5391 25.7893 29.9142 25.4142C30.2893 25.0391 30.5 24.5304 30.5 24V8C30.5 7.46957 30.2893 6.96086 29.9142 6.58579C29.5391 6.21071 29.0304 6 28.5 6ZM26.3 8L16.5 14.78L6.7 8H26.3ZM4.5 24V8.91L15.93 16.82C16.0974 16.9361 16.2963 16.9984 16.5 16.9984C16.7037 16.9984 16.9026 16.9361 17.07 16.82L28.5 8.91V24H4.5Z"
                          fill="url(#paint0_linear_120_1409)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_120_1409"
                            x1="2.5"
                            y1={16}
                            x2="30.5"
                            y2={16}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FAA673" />
                            <stop offset={1} stopColor="#A06242" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h6>info@makemyasset.com</h6>
                  </a>
                  <a
                    href="tel:+91-00000000000"
                    className="col-md"
                  >
                    <div className="ico">
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.42684 10.516C7.04584 8.00202 8.81984 5.74002 11.5298 4.91002C12.011 4.76275 12.5302 4.8046 12.9816 5.02703C13.433 5.24947 13.7825 5.63573 13.9588 6.10702L14.8278 8.42702C14.9676 8.80021 14.9926 9.20663 14.8998 9.59415C14.8069 9.98168 14.6005 10.3326 14.3068 10.602L11.7218 12.973C11.5941 13.09 11.4989 13.2381 11.4456 13.4029C11.3924 13.5676 11.3828 13.7434 11.4178 13.913L11.4408 14.017L11.5048 14.278C11.5618 14.498 11.6478 14.808 11.7688 15.178C12.0088 15.913 12.3918 16.901 12.9618 17.888C13.5318 18.875 14.1958 19.701 14.7118 20.276C14.9808 20.5752 15.2617 20.8634 15.5538 21.14L15.6338 21.214C15.7631 21.3285 15.9199 21.4076 16.0888 21.4435C16.2578 21.4794 16.4331 21.471 16.5978 21.419L19.9438 20.366C20.324 20.2465 20.7312 20.2433 21.1132 20.3568C21.4952 20.4703 21.8346 20.6953 22.0878 21.003L23.6708 22.925C24.3308 23.725 24.2528 24.901 23.4938 25.608C21.4198 27.541 18.5678 27.938 16.5838 26.342C14.1526 24.38 12.1025 21.988 10.5358 19.285C8.95765 16.583 7.90291 13.6087 7.42684 10.516ZM13.5128 14.044L15.6588 12.076C16.2461 11.5373 16.6591 10.8353 16.8447 10.0603C17.0304 9.28524 16.9803 8.4724 16.7008 7.72602L15.8308 5.40602C15.4759 4.45815 14.7728 3.68132 13.865 3.23388C12.9571 2.78645 11.9128 2.70209 10.9448 2.99802C7.57984 4.02902 4.87784 7.04602 5.44984 10.815C5.9633 14.1569 7.10219 17.3721 8.80684 20.292C10.4966 23.2069 12.7077 25.7864 15.3298 27.902C18.3048 30.292 22.2788 29.477 24.8578 27.072C25.5962 26.3845 26.0443 25.441 26.1106 24.4343C26.177 23.4276 25.8566 22.4335 25.2148 21.655L23.6318 19.733C23.1253 19.1174 22.4463 18.6673 21.6821 18.4403C20.9179 18.2133 20.1033 18.2198 19.3428 18.459L16.5658 19.333C16.4415 19.2052 16.3198 19.0748 16.2008 18.942C15.6299 18.3108 15.125 17.6229 14.6938 16.889C14.2736 16.1486 13.9302 15.3672 13.6688 14.557C13.6133 14.3874 13.5613 14.2167 13.5128 14.045"
                          fill="url(#paint0_linear_120_1415)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_120_1415"
                            x1="5.37305"
                            y1="16.0807"
                            x2="26.1192"
                            y2="16.0807"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FAA673" />
                            <stop offset={1} stopColor="#A06242" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h6>+91-00000000000</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="contact-secB">
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
          <div className="contact-secC sec-pad gray_bg">
            <div className="container">
              <div className="heading text-center">
                <h3>Ready to Find Your Dream Home</h3>
                <p>
                  Connect with Our Experts for Seamless Home Buying or Selling.
                </p>
              </div>
              <div className="form-wrap">
                <div className="form-grid form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      required=""
                    />
                    <label>Name*</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required=""
                    />
                    <label>Email*</label>
                  </div>
                  <div className="form-group">
                    <input type="tel" className="form-control" name="phone" />
                    <label>Phone*</label>
                  </div>
                  <MySelect
                    id="budget-select"
                    placeholder="What's your budget"
                    options={options_Budget}
                    selectedValue={budget}
                    onValueChange={setBudget}
                  />
                  <div className="form-group full">
                    <textarea
                      className="form-control"
                      name="message"
                      required=""
                      defaultValue={""}
                    />
                    <label>Message*</label>
                  </div>
                  <div className="submit-grp full text-center">
                    <button type="submit" className="btn">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}