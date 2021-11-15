import React from "react";
import imageOverlay from "../img/earth.jpg";

class Contact extends React.Component {
  render() {

    const FirstBlock = (
      <div className="col-md-6">
        <div className="title-box-2 pt-4 pt-md-0">
          <h5 className="title-left">Get in Touch</h5>
        </div>
        <div className="more-info">
          <p className="lead">
            Whether you want to get in touch, talk about a project
            collaboration, or just say hi, I'd love to hear from
            you.
            <br /><br />
            Feel free to send me an email, connect on Linkedin, or chat with my Bot using any of the provided channels.
          </p>
          <ul className="list-ico">
            <li><span className="ion-ios-location"></span>Abu Dhabi, UAE</li>
            {/* <li><span className="ion-ios-telephone"></span> (+971) 585855047</li> */}
            <li><span className="ion-email"></span> hi@menas.pro</li>
          </ul>
        </div>
        <div className="socials">
          <ul>
            <li>
              <a
                href="https://stackoverflow.com/users/11942492"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico-circle">
                  <i className="fa fa-stack-overflow"></i>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/meena-erian"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico-circle">
                  <i className="ion-social-github"></i>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/devmenas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico-circle">
                  <i className="ion-social-linkedin"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )


    const SecondBlock = (
      <div className="col-md-6">
        <div className="title-box-2">
          <h5 className="title-left">Chat with MenasRobot</h5>
        </div>
        <div className="more-info">
          <p className="lead">
            For an immediate response, try chatting with my bot.
            <br /><br />
            It's still quite inexperienced but sometime it helps.
          </p>
          {/* <ul class="list-ico">
            <li><span class="ion-ios-location"></span>Abu Dhabi, UAE</li>
            <li><span class="ion-ios-telephone"></span> (+971) 585855047</li>
            <li><span class="ion-email"></span> hi@menas.pro</li>
          </ul> */}
        </div>
        <div className="socials">
          <ul>
            <li>
              <a
                href="https://t.me/Menasrobot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico-circle">
                  <i className="fa fa-telegram"></i>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#botwebchat"
                onClick={
                  () => {
                    window.webchatOpen = !document.querySelector('.bp-widget-side');
                    window.botpressWebChat.sendEvent({ type: window.webchatOpen ? 'show' : 'hide' });
                  }
                }
              >
                <span className="ico-circle">
                  <i className="fa fa-globe"></i>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://m.me/Menasrobot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico-circle">
                  <i className="fa fa-facebook"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
    // const SecondBlock = (
    //   <div className="col-md-6">
    //     <div className="title-box-2">
    //       <h5 className="title-left">Send A Message</h5>
    //     </div>
    //     <div>
    //       <form
    //         action="https://formspree.io/xdoeonlo"
    //         method="POST"
    //         className="contactForm"
    //       >
    //         <div id="sendmessage">
    //           Your message has been sent. Thank you!
    //         </div>
    //         <div id="errormessage"></div>
    //         <div className="row">
    //           <div className="col-md-12 mb-3">
    //             <div className="form-group">
    //               <input
    //                 type="text"
    //                 name="name"
    //                 className="form-control"
    //                 id="name"
    //                 placeholder="Your Name"
    //                 data-rule="minlen:4"
    //                 data-msg="Please enter at least 4 chars"
    //               />
    //               <div className="validation"></div>
    //             </div>
    //           </div>
    //           <div className="col-md-12 mb-3">
    //             <div className="form-group">
    //               <input
    //                 type="email"
    //                 className="form-control"
    //                 name="email"
    //                 id="email"
    //                 placeholder="Your Email"
    //                 data-rule="email"
    //                 data-msg="Please enter a valid email"
    //               />
    //               <div className="validation"></div>
    //             </div>
    //           </div>
    //           <div className="col-md-12 mb-3">
    //             <div className="form-group">
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 name="subject"
    //                 id="subject"
    //                 placeholder="Subject"
    //                 data-rule="minlen:4"
    //                 data-msg="Please enter at least 8 chars of subject"
    //               />
    //               <div className="validation"></div>
    //             </div>
    //           </div>
    //           <div className="col-md-12 mb-3">
    //             <div className="form-group">
    //               <textarea
    //                 className="form-control"
    //                 name="message"
    //                 rows="5"
    //                 data-rule="required"
    //                 data-msg="Please write something for us"
    //                 placeholder="Message"
    //               ></textarea>
    //               <div className="validation"></div>
    //             </div>
    //           </div>
    //           <div className="col-md-12">
    //             <button
    //               type="submit"
    //               className="button button-a button-big button-rouded"
    //             >
    //               Send Message
    //             </button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // )

    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    {FirstBlock}
                    {SecondBlock}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
