import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  constructor() {
    super();
    this.state = { computerSkills: true };
  }
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = "";
    const education = (
      <div key="education">
        <h3>Haryana Central University</h3>
        <p className="info">
          Master's in Science <span>&bull;</span>
          <em className="date">July 2019</em>
        </p>
        <p>
          I have done my Masters in Biotechnology from school of Biotechnology
          central University of Haryana.
        </p>

        <h3>University of Jammu</h3>
        <p className="info">
          Bachelor's in Science <span>&bull;</span>
          <em className="date">July 2017</em>
        </p>
        <p>
          I have done my Bachelor's in Science from Government Gandhi Memorial
          Science college Jammu.
        </p>
      </div>
    );

    const work = (
      <div key="Company">
        <h3>DataGrids Softwares</h3>
        <p className="info">
          Internship
          <span>&bull;</span> <em className="date">January 2021 - Present</em>
        </p>
        <p>My primary responsibility was develop and maintain front-end.</p>
        <h3>COUNCIL FOR SCIENTIFIC AND INDUSTRIAL RESEARCH CSIR-IIIM</h3>
        <p className="info">
          Internship
          <span>&bull;</span>{" "}
          <em className="date">January 2020 - January 2021</em>
        </p>
        <p>
          My primary was to assist in molecular project assigned to me using
          various molecular biology techniques and I have also worked in BSL-3
          (Biosafety level 3) during this pendemic time (ie COVID-19).
        </p>
      </div>
    );
    const backgroundColor = this.getRandomColor();
    const className = "bar-expand " + "React";
    const width = 360;
    const skills = (
      <>
        <li key="React">
          <span
            style={{ width: 300, backgroundColor: this.getRandomColor() }}
            className={className}
          ></span>
          <em>React</em>
        </li>
        <li key="Javascript">
          <span
            style={{ width: 300, backgroundColor: this.getRandomColor() }}
            className={className}
          ></span>
          <em>Javascript</em>
        </li>
        <li key="Redux">
          <span
            style={{ width: 300, backgroundColor: this.getRandomColor() }}
            className={className}
          ></span>
          <em>Redux</em>
        </li>
        <li key="DataStructures">
          <span
            style={{ width: 300, backgroundColor: this.getRandomColor() }}
            className={className}
          ></span>
          <em>Data Structures</em>
        </li>
        <li key="GitHub">
          <span
            style={{ width: 300, backgroundColor: this.getRandomColor() }}
            className={className}
          ></span>
          <em>GitHub</em>
        </li>
      </>
    );
    const wetSkills = (
      <>
        <li key="pcr">
          <span
            style={{ width: 300, backgroundColor: this.getRandomColor() }}
            className={className}
          ></span>
          <em>Polymerase Chain Reaction</em>
        </li>
        <li key="dna">
          <span
            style={{ width: 300, backgroundColor: this.getRandomColor() }}
            className={className}
          ></span>
          <em>DNA/RNA/Plasmid Isolation Purification</em>
        </li>
        <li key="nanodrop">
          <span
            style={{ width: 300, backgroundColor: this.getRandomColor() }}
            className={className}
          ></span>
          <em>DNA/RNA purification </em>
        </li>
        <li key="micoribiology">
          <span
            style={{ width: 300, backgroundColor: this.getRandomColor() }}
            className={className}
          ></span>
          <em>Microbiological pure culturing techniques</em>
        </li>
        <li key="cloning">
          <span
            style={{ width: 300, backgroundColor: this.getRandomColor() }}
            className={className}
          ></span>
          <em>Recombinant technology/Cloning</em>
        </li>
      </>
    );

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div>
              <input
                type="button"
                value="Wet Lab"
                onClick={() =>
                  this.setState({ ...this.state, computerSkills: false })
                }
              />

              <input
                type="button"
                value="Dry Lab/Computer Skills"
                onClick={() =>
                  this.setState({ ...this.state, computerSkills: true })
                }
              />
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage} </p>

              <div className="bars">
                <ul className="skills">
                  {this.state.computerSkills ? skills : wetSkills}
                </ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
