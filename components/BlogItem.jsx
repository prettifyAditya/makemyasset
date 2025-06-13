import Image from "next/image";
import Link from "next/link";

export default function BlogItem({imgSrc, date, desc}){
    return(
        <Link href="/blog-detail" className="blog-col item-md">
            <figure>
                <Image src={imgSrc} alt="Blog Image" width="457" height="524" />
            </figure>
            <figcaption>
                <p className="lctn clndr">{date}</p>
                <h6>{desc}</h6>
            </figcaption>
        </Link>
    )
}