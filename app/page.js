import Image from "next/image";
import Link from "next/link";
import "/styles/home/home.css"

export default function Home() {
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
            
          </div>
        </div>
      </div>
    </main>
  );
}
