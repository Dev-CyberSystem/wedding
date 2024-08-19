import "./StyleHero.css"
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Hero = () => {
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2024-11-15T00:00:00');
    const difference = weddingDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <Container className="text-center my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="couple-name">James & Amelia</h2>
          <p>We Are Getting Married November 15, 2024</p>
          <div id="countdown" className="d-flex justify-content-center">
            <div className="time-unit mx-3">
              <h3>{timeLeft.days || '0'}</h3>
              <p>Days</p>
            </div>
            <div className="time-unit mx-3">
              <h3>{timeLeft.hours || '0'}</h3>
              <p>Hours</p>
            </div>
            <div className="time-unit mx-3">
              <h3>{timeLeft.minutes || '0'}</h3>
              <p>Min</p>
            </div>
            <div className="time-unit mx-3">
              <h3>{timeLeft.seconds || '0'}</h3>
              <p>Sec</p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Image src="/path_to_your_image.jpg" alt="Couple" fluid rounded />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
