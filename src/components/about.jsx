import React from "react";
//import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "DevOps_skill", content: "DevOps tools", porcentage: "75%", value: "75" },
        {
          id: "Business_skill",
          content: "Business analysis & reporting and analysis",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Automation_skill",
          content: "Automation and IOT",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript & TypeScript",
          porcentage: "75%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS & JSX & TSX",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python, Python Frameworks, Python package development",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Chatbots_skill",
          content: "Chatbots & NLU & ML",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "DBMS_skill",
          content: "DBMS (SQL, SQLite, Postgresql, Oracle, MongoDB)",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Datacenter_skill",
          content: "Datacenter Setup, on-premise installation, cloud network setup",
          porcentage: "70%",
          value: "70"
        }
      ],

      about_me: [
        {
          id: "first-p-about",
          content:
            "Born in Riyadh, SA in the 21st of June 1996, and have always been passionate about electronics, electrical engineering, creating electronic circuits and disassembling and reassembling electronic devices."
        },
        {
          id: "second-p-about",
          content:
            "I moved to my native country Egypt in 2008 aged 12. it didn't really feel much like home, since it was neither familiar nor similar to my mixed cultural background (most of my childhood in SA was spent in Al Danah International School along with a few other communities)"
        },
        {
          id: "third-p-about",
          content:
            "During my last high school years, I decided that my true passion is mainly the art of hiring machines to help humans with their work and everyday tasks."
        },
        {
          id: "fourth-p-about",
          content:
            "I graduated in 2016 with a degree focused on computers and networking, and I've been working hard on my experience in the practical world even long before graduating."
        },
        {
          id: "fifth-p-about",
          content:
            "And not long after graduating, I had to face one of my worst nightmares. Rather than being allowed to enter the market right away, I had to complete my compulsory military service. But I didn't give up; I was able to join startup accelerator programs and learn a lot from business developers and entrepreneurs during every monthly vacation from my service and even while on duty, I was able to multitask with software development using nothing but my smartphone with an unstable H+ mobile data connection to the internet in the middle of the desert ( I had to build some special tools and utilities for that)."
        },
        {
          id: "sixth-p-about",
          content:
            "And once that nightmare was over, and that I can comfortably work from a decent laptop and use a 600 Mbps internet connection, my progress became even much faster. I have worked with so many programming languages and technologies to a degree where nothing seems new or too sophisticated anymore. Whenever I need to learn a new programing language or a new technology, it takes less than two days and I'm already working with it just like someone who's been using it for two years."
        },
        {
          id: "seventh-p-about",
          content:
            "In September 2020, I got a new Software Development job in the healthcare sector in Abu Dhabi, UAE. It was a very interesting adventure to move to a new world, and start a new life. I made too much progress here, and met many awesome people and got promoted until I'm working directly with business owners and executive managers to analyze business challenges/needs and come up with reasonable innovative solutions in a very challenging timeframe, yet make sure provided solutions are reliable and scalable enough to proceed as a long term solution as well."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
