import React from 'react';
import { Container, Carousel } from "react-bootstrap";
import hero1 from "../../imgs/hero1.jpeg";
import hero2 from "../../imgs/hero2.jpeg";
import hero3 from "../../imgs/hero3.jpeg";
import hero4 from "../../imgs/hero4.jpeg";
import hero5 from "../../imgs/hero5.jpeg";
import hero6 from "../../imgs/hero6.jpeg";
import hero7 from "../../imgs/hero7.jpeg";
import hero8 from "../../imgs/hero8.jpeg";
function Hero() {
    return (
        <div>
            <Container className="hero">
                <div className="heroSection">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="heroimg"
                                src={hero1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                       
                        <Carousel.Item>
                            <img
                                className="heroimg"
                                src={hero2}
                                alt="Second slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="heroimg"
                                src={hero3}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="heroimg"
                                src={hero4}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="heroimg"
                                src={hero5}
                                alt="Fifth slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="heroimg"
                                src={hero6}
                                alt="Sixth slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="heroimg"
                                src={hero7}
                                alt="Seventh slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="heroimg"
                                src={hero8}
                                alt="Eighth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        </div>
    );
}

export default Hero;
