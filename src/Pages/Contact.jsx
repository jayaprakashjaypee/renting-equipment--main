import React from "react";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
const Contact = () => {
  return (
    <div>
      <TopBar />
      <div className="mb-4"></div>
      <div className="container m-auto text-center mb-5">
        <img
          style={{ width: "100px", height: "100px" }}
          src="https://c0.wallpaperflare.com/preview/982/836/887/advice-assistance-call-call-now.jpg"
          alt="icon"
        />
        <h1 style={{ color: "#2486d5" }}>Contact Us</h1>
        <p className="m-auto pb-5" style={{ maxWidth: "400px" }}>
          Sit back & relax because we got this! With a base of 1200+ equipment
          and 300+ suppliers, we leave no stone unturned to serve you at best.
        </p>
        <p className=" pb-5">
          <h2 style={{ color: "#2486d5" }}>Phone</h2>
          <br />
          <span className="DetailPhone ">+9140 6901 1655</span>
        </p>
        <p>
          <h2 style={{ color: "#2486d5" }}>Email</h2>
          <br />
          <span className="DetailEmail ">info@equiphunter.com</span>
        </p>
      </div>
      <hr />
      <div className="container ">
        <section className="m-auto">
          <h2 class=" DetailEmail h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>

          <p class="text-center w-responsive mx-auto mb-5 ">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div class="row">
            <div>
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        Placeholder="Name"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        Placeholder="Email"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div class="row mt-4 mb-4">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        class="form-control"
                        Placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="5"
                        Placeholder="Message"
                        class="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="text-center text-md-left mt-4">
                  <a
                    onClick={() => {
                      alert("We will get back to you shortly");
                    }}
                    class="btn btn-primary"
                  >
                    Send
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

// #2486d5
