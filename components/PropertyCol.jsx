import Image from "next/image"
import Link from "next/link"
export default function PropertyCol({imgSrc, PropName, PropLoc }){
    return(
        <div className="property_col item-md">
            <Link href="property-details">
                <figure>
                    <Image src={imgSrc} width="374" height="383" alt="Property Image" />
                </figure>
            </Link>
            <figcaption>
                <h3>{PropName}</h3>
                <p className="loc"><img src="/assets/icon/location.svg" alt="Location Icon" /> {PropLoc}</p>
                <div className="btn_wrapper flex">
                    <button type="button" className="btn">
                        Enquire Now
                    </button>
                    <Link className="btn" href="/property-details">
                        View Details
                    </Link>
                </div>
            </figcaption>
        </div>
    )
}