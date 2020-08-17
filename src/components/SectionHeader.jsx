import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Col } from "react-bootstrap";
import emoji from "react-easy-emoji";
import "./SectionHeader.scss";
// import { propTypes } from "react-bootstrap/esm/Image";

const SectionHeader = ({ header, subheader, className, myEmoji, ...restProps }) => {
  const subheaderPart = subheader ? (
    <h3 className="section-subheading text-muted">{subheader}</h3>
  ) : null;

  return (
    <Col lg={12} className={clsx("section-header", "text-center", className)} {...restProps}>
      <h2 className="section-heading text-uppercase">{header} {emoji(myEmoji)}</h2>
      {subheaderPart}
    </Col>
  );
};

SectionHeader.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  className: PropTypes.string,
  myEmoji: PropTypes.string
};

SectionHeader.defaultProps = {
  header: "",
  subheader: "",
  className: null,
  myEmoji: ""
};

export default SectionHeader;
