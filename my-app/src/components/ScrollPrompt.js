import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function ScrollPrompt() {
  return (
    <div>
    <Container>
      <Row>
        <p className="text-center anim">
          get to know me
          <br/>
        <FontAwesomeIcon icon={faArrowDown} className="mt-3"/>
        </p>
      </Row>
    </Container>
    </div>
  );
}

export default ScrollPrompt;