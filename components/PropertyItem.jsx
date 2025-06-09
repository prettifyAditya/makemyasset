import Image from "next/image";
import Link from "next/link";

export default function PropertyItem({imgSrc, title, address, price, area}) {
    return (
      <div className="project-col">
        <Link href="/property-detail" className="figure">
          <Image src={imgSrc} width="411" height="232" alt="Property Images" />
        </Link>
        <figcaption>
          <div className="fig-top">
            <h6 className="title">
              {title}
            </h6>
            <div className="yldyj">
              <p className="lctn">{address}</p>
              <h6 className="alpgw">{price}</h6>
            </div>
          </div>
          <ul className="fig-bottom">
            <li>
              <div className="elajt">
                <span>
                  <img src="assets/icon/area-gray.svg" alt="" />
                  {area}
                </span>
              </div>
            </li>
            <li>
              <Link href="javascript:;">
                <img src="assets/icon/call-gradient.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link href="javascript:;">
                <img src="assets/icon/whatsapp-gradient.svg" alt="" />
              </Link>
            </li>
          </ul>
        </figcaption>
      </div>
    );
}