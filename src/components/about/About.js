import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './About.css';

function About() {
  return (
   <div>
    <Carousel className='about'> 
      <Carousel.Item>
        This entire class experience has frightened me...
        <Carousel.Caption>
          <h3>First slide</h3>
          <p>This doesn't feel great...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        My laptop keeps crashing...
        <Carousel.Caption>
          <h3>Second slide</h3>
          <p>I have tried my best...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        I'm okay with just turning in SOMETHING!
        <Carousel.Caption>
          <h3>Third slide</h3>
          <p>
            Even if that something is completely unfinished garbage.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div> 
  );
}

export default About;