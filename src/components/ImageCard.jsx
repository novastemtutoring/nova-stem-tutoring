import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import Image from "components/Image";
import "./ImageCard.scss";
import SocialIconPanel from "./SocialIconPanel";

const ImageCard = ({ className, imageFileName, imageAlt, header, subheader }) => {
  return (
    <Card className={clsx("image-card bg-dark text-white text-center", className)}>
      <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
      <Card.ImgOverlay className="no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-lead-in">{subheader}</div>
            <div className="intro-heading text-uppercase">{header}</div>
            <SocialIconPanel />
          </div>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
};

ImageCard.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
};

export default ImageCard;
