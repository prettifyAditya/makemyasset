import Image from "next/image";
import "../../styles/about/about.css"
export default function AboutUs() {
    return (
      <main>
        <div className="banner about-banner">
          <div className="bg">
            <video
              src="/assets/video/home-secD.mp4"
              playsInline
              autoPlay
              muted
              loop
              width="100%"
              height={600}
              type="video/mp4"
            ></video>
          </div>
          <div className="banner-wrapper">
            <div className="container">
              <div className="content text-center">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="about-secA sec-pad dark_bg">
            <div className="container flex">
              <div className="colA heading">
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nemo impedit, reiciendis vero praesentium saepe illum, blanditiis pariatur aliquid aperiam et voluptates quae deserunt similique eos vitae beatae tempore. Molestias eius sequi repellendus provident voluptate error laboriosam natus alias dolorem nobis dolorum dolores corrupti voluptas at, possimus ex quas voluptates.</p>
              </div>
              <div className="colB">
                <figure>
                  <Image src="/assets/images/other/property-detail.jpg" width="705" height="517" alt="Our Story"></Image>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="about-secB gray_bg flex">
            <div className="bg">
              <video src="/assets/video/vision_bg.mp4" autoPlay muted loop playsInline></video>
            </div>
            <div className="colA">
              <div className="icon">
                <img src="/assets/icon/vision.svg" alt="Vision" />
              </div>
              <h3>Vision</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quia alias qui aliquid in sapiente pariatur recusandae quos sint a pariatur recusandae quos sint a.</p>
            </div>
            <div className="colB">
              <div className="icon">
                <img src="/assets/icon/mission.svg" alt="Mission" />
              </div>
              <h3>Mission</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quia alias qui aliquid in sapiente pariatur recusandae quos sint a pariatur recusandae quos sint a.</p>
            </div>
          </div>
        </section>
        <section>
          <div className="about-secC dark_bg sec-pad">
            <div className="container flex">
              <figure>
              <Image src="/assets/images/other/project1.jpg" width="457" height="524" alt="Director's Image"></Image>
            </figure>
            <figcaption className="heading">
              <h2>Message from the Director</h2>
              <div className="content-wrap">
                <div className="scroll-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat labore temporibus dignissimos veritatis excepturi porro, officia vel minus voluptatum animi laudantium nihil a sapiente quasi ratione hic rem voluptatibus quas rerum doloremque, amet, repudiandae perspiciatis ea. Facere, nemo veritatis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat labore temporibus dignissimos veritatis excepturi porro, officia vel minus voluptatum animi laudantium nihil a sapiente quasi ratione hic rem voluptatibus quas rerum doloremque, amet, repudiandae perspiciatis ea. Facere, nemo veritatis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat labore temporibus dignissimos veritatis excepturi porro, officia vel minus voluptatum animi laudantium nihil a sapiente quasi ratione hic rem voluptatibus quas rerum doloremque, amet, repudiandae perspiciatis ea. Facere, nemo veritatis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe placeat labore temporibus dignissimos veritatis excepturi porro, officia vel minus voluptatum animi laudantium nihil a sapiente quasi ratione hic rem voluptatibus quas rerum doloremque, amet, repudiandae perspiciatis ea. Facere, nemo veritatis.</p>
                </div>
              </div>
              <div className="designation">
                <h5>Mr. John Doe</h5>
                <p>Director</p>
              </div>
            </figcaption>
            </div>
          </div>
        </section>
      </main>
    );
}