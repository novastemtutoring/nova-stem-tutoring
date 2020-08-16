import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import SocialIconPanel from "components/SocialIconPanel";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    termsHref,
    termsText,
    social: {
      facebook,
      github,
      linkedin,
      medium,
      twitter,
      yelp,
      phone,
      email },
  } = frontmatter;

  return (
    <footer className="footer py-3">
      <SocialIconPanel />
      <Container>
        <Row className="align-items-center text-center">
          {copyright}
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
