import "./StyleHero.css"
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import dj from '../../public/dj.jpg';

const Hero = () => {
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2024-10-12T00:00:00');
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
          <h2 className="couple-name">JJ & DAI</h2>
          <p>Nos casamos 12 Octubre 2024</p>
          <div id="countdown" className="d-flex justify-content-center">
            <div className="time-unit mx-3">
              <h3>{timeLeft.days || '0'}</h3>
              <p>Dias</p>
            </div>
            <div className="time-unit mx-3">
              <h3>{timeLeft.hours || '0'}</h3>
              <p>Horas</p>
            </div>
            <div className="time-unit mx-3">
              <h3>{timeLeft.minutes || '0'}</h3>
              <p>Minutos</p>
            </div>
            <div className="time-unit mx-3">
              <h3>{timeLeft.seconds || '0'}</h3>
              <p>Segundos</p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Image src={dj} alt="Foto Daiana y Juan" fluid rounded className="fotoHero" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
