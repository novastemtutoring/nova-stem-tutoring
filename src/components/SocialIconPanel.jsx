import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Email, Phone, Twitter, Facebook, Yelp } from "./SocialIcons";

const SocialIconPanel = () => (
    <Container>
        <Row className="align-items-center text-center">
            <Col className="my-3 my-lg-0">
                <Email userName="drhays@novastemtutoring.com" />
                <Phone userName="7036797548" />
                <Twitter userName="novastemtutor" />
                <Facebook userName="novastemtutoring" />
                <Yelp userName="nova-stem-tutoring" />
            </Col>
        </Row>
    </Container>
)

export default SocialIconPanel;