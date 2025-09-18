import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faStethoscope, faVirus, faMaskFace, faUserNurse, faVirusCovid, faHospital, faHouseMedical, faPills, faUserDoctor, faVialVirus, faStaffSnake, faPersonBreastfeeding } from '@fortawesome/free-solid-svg-icons';

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  icons = [
    { icon: faSyringe, color: "#63E6BE", rotation: 180 },
    { icon: faStethoscope, color: "#63E6BE" },
    { icon: faVirus, color: "#63E6BE" },
    { icon: faMaskFace, color: "#78f7a9", style: { '--fa-primary-color': '#78f7a9', '--fa-secondary-color': '#78f7a9' } },
    { icon: faUserNurse, color: "#6cf9bc", style: { '--fa-primary-color': '#6cf9bc', '--fa-secondary-color': '#6cf9bc' } },
    { icon: faVirusCovid, color: "#60d27c", style: { '--fa-primary-color': '#60d27c', '--fa-secondary-color': '#60d27c' } },
    { icon: faHospital, color: "#63E6BE" },
    { icon: faHouseMedical, color: "#71e5b3", style: { '--fa-primary-color': '#71e5b3', '--fa-secondary-color': '#71e5b3' } },
    { icon: faPills, color: "#73e2b8", style: { '--fa-primary-color': '#73e2b8', '--fa-secondary-color': '#73e2b8' } },
    { icon: faUserDoctor, color: "#63E6BE" },
    { icon: faVialVirus, color: "#61ffba", style: { '--fa-primary-color': '#61ffba', '--fa-secondary-color': '#61ffba' } },
    { icon: faStaffSnake, color: "#63E6BE" },
    { icon: faPersonBreastfeeding, color: "#31c9ab", style: { '--fa-primary-color': '#31c9ab', '--fa-secondary-color': '#31c9ab' } },
  ];

  slides = this.icons.map((icon, index) => {
    return {
      key: uuidv4(),
      content: (
        <div style={styles.card}>
          <FontAwesomeIcon icon={icon.icon} style={{ color: icon.color, fontSize: '100px' }} />  {/* Increased fontSize */}
        </div>
      ),
      onClick: () => this.setState({ goToSlide: index })
    };
  });

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        goToSlide: (prevState.goToSlide + 1) % this.slides.length
      }));
    }, 1500); 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{ width: "100%", height: "400px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'15em',
    height: '40%',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    color: '#fff'
  }
};
