import Link from "next/link";
import "../../styles/privacy/privacy.css"
export default function Thankyou(){
    return (
      <main>
        <div className="banner thank-you-banner">
          <div className="bg">
            <video
              playsInline
              autoPlay
              muted
              loop
              width="100%"
              height={600}
              src="assets/video/hero-video.mp4"
              type="video/mp4"
            >
            </video>
          </div>
          <div className="banner-wrapper">
            <div className="container">
              <div className="content text-center">
                <h1>Thank You!</h1>
                <p>
                  Thank you your query has been submitted! We will get back to
                  you soon with an update.
                </p>
                <Link href="/" className="btn">
                  BACK TO HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}