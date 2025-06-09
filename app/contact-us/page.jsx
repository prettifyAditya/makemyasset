import "../../styles/contact/contact.css"
export default function ContactUs(){
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
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                    />
                    <label>Phone*</label>
                  </div>
                  <div className="form-group">
                    <select name="" id="" className="form-control">
                      <option value={0}>What your Budget</option>
                      <option value="Under ₹ 50 Lac">Under ₹ 50 Lac</option>
                      <option value="₹ 50 Lac to ₹ 80 Lac">
                        ₹ 50 Lac to ₹ 80 Lac
                      </option>
                      <option value="₹ 80 Lac to ₹ 1 Cr">
                        ₹ 80 Lac to ₹ 1 Cr
                      </option>
                      <option value="₹ 1 Cr to ₹ 10 Cr">
                        ₹ 1 Cr to ₹ 10 Cr
                      </option>
                      <option value="₹ 10 Cr  and above">
                        ₹ 10 Cr and above
                      </option>
                    </select>
                    <label>Budget*</label>
                  </div>
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