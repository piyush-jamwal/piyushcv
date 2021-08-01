import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = "Piyush Jamwal";
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = "classic.piyush@gmail.com";
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>
                I grew up studying multi disciplanary subjects. I am a hard core
                Biotechdnologist at the same time I am fron-end developer too. I
                got the oppertunity to work with reknowned scientists especially
                during this pendemic ie COVID. This resulted in several
                publications of mine in the field of molecular biology. I have
                also contributed to COVID testing right from collection of
                sample , isolation of RNA in BSL3 and setting up of real time
                PCR reaction.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    {/* <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span> */}
                    {/* <br /> */}
                    <span>{email}</span>
                  </p>
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
