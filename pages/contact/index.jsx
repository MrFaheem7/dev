import React from "react";

function Contact() {
  return (
    <>
      <div className="Contact">
        <div className="container">
          <h2
            className="text-center"
            style={{ fontWeight: "bold", fontSize: "42px" }}
          >
            Contact Us
          </h2>
          <div className="map w-100 mt-3">
            
            <iframe
              className="w-100"
              src="https://maps.google.com/maps?q=shareef%20college%20of%20engineering&amp;t=k&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              height={"500px"}
              style={{ border: "0" }}
            ></iframe>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6">
              <div className="contact__text">
                <div className="section-title">
                  <span style={{ color: "#e53637" }}>Information</span>
                  <h2>Contact Us</h2>
                  <p>
                    we pride ourselves on offering an extensive collection of
                    high-quality items spanning various categories, including
                    fashion, electronics, beauty essentials, and much more
                  </p>
                </div>
                <ul>
                  <li>
                    <h4>Pakistan Lahore</h4>
                    <p>
                      126 C Fazaia Housing Scheme Lhr. <br />
                      0304-4702826
                    </p>
                  </li>
                  <li>
                    <h4>Pakistan Islamabad</h4>
                    <p>
                      109 Sector 11 Isl Lhr. <br />
                      0343-4201351
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <form action="https://formspree.io/f/mjvqqadn" method="POST">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" name="name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email" name="email" />
                    </div>
                    <div className="col-lg-12">
                      <textarea placeholder="Message" name="message"></textarea>
                      <button type="submit" className="site-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
