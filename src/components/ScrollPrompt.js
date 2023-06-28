import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function ScrollPrompt() {
  return (
    <div>
    <Container>
      <Row>
        <p className="text-center anim"
        data-aos="zoom-in" data-aos-duration="900">
          get to know me :)
          <br/>
        <FontAwesomeIcon icon={faArrowDown} className="mt-3"/>
        </p>
      </Row>
    </Container>
    </div>
  );
}

export default ScrollPrompt;