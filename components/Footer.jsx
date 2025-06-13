"use client"
import Image from "next/image"
import Link from "next/link"
import EnquirePop from "./EnquirePop"
export default function Footer() {
    return(
        <>
        <footer>
            <Image src="/assets/images/home/footer_bg.jpg" className="footer_bg" width="1280" height="370" alt="Footer Background"></Image>
            <div className="content">
                <div className="colA">
                    <Link href="/">
                        <img src="/assets/images/logo.svg" alt="Make My Asset Logo" />
                    </Link>
                </div>
                <div className="colB">
                    <div className="imp_links">
                        <h4 className="grad">Company</h4>
                        <ul>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                            <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                            <li><Link href="/privacy-policy">Policy of Use</Link></li>
                        </ul>
                    </div>
                    <div className="imp_links">
                        <h4 className="grad">Resources</h4>
                        <ul>
                            <li><Link href="/property-listing">Awards & Recognition</Link></li>
                            <li><Link href="/property-listing">Media Coverage</Link></li>
                            <li><Link href="/property-listing">EMI Calculator</Link></li>
                            <li><Link href="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="colC">
                    <h4 className="grad">Connect with us</h4>
                    <a href="mailto:info@makemyasset.com" className="mail">info@makemyasset.com</a>
                    <a href="tel:+91-00000000000" className="call">+91-00000000000</a>
                    <div className="btn_Wrapper">
                        <a href="javascript:;" className="btn white"><img src="/assets/icon/whatsapp.svg" alt="Whatsapp Icon" />Whatsapp</a>
                        <button type="button" className="btn" onClick={() => {
                                document.querySelector('.enquire-pop').classList.add('is-open')
                                document.querySelector('.overlay').classList.add('is-open')
                                document.querySelector('body').classList.add('overflow-hidden')
                            }}>Quick Enquiry</button>
                    </div>
                </div>
            </div>
            <div className="tag">
                <p>
                    © Make My Asset. All rights reserved.<a href="https://www.prettifycreative.com" target="_blank"> Made by passion <img src="/assets/icon/prettify.svg" alt="Made-by-passion" /></a>
                </p>
            </div>
        </footer>
        <div
          className="overlay"
          onClick={() => {
            document.querySelector(".ham-pop").classList.remove("is-open");
            document.querySelector(".enquire-pop").classList.remove("is-open");
            document.querySelector(".overlay").classList.remove("is-open");
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        ></div>
        <EnquirePop/>
        </>
    )
}