import React from "react";
import PropTypes from "prop-types";

import CircleFAButton from "components/CircleFAButton";
import Image from "components/Image";
import "./ServiceItem.scss";



// import { ListGroup } from "react-bootstrap";

const ServiceItem = ({ iconName, imageFileName, header, content, subjects }) => {
  let iconPart;
  if (iconName) {
    iconPart = <CircleFAButton iconName={iconName} />;
  }

  let imagePart;
  if (imageFileName) {
    imagePart = <Image className="service-item-image" fileName={imageFileName} />;
  }

  let subjectPart;
  if (subjects) {
    subjectPart =
      subjects.map((subject) =>
        <div key={subject.id}>
          <p className="text-muted">
            <ul>
              <li>
                {subject}
              </li>
            </ul>
          </p>
        </div >
      )
  }

  return (
    <>
      {iconPart}
      {imagePart}
      <h4 className="service-item-heading">{header}</h4>
      <p className="text-muted">{content}</p>
      {subjectPart}
    </>
  )
}
ServiceItem.propTypes = {
  iconName: PropTypes.string,
  imageFileName: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  subjects: PropTypes.array
};

ServiceItem.defaultProps = {
  iconName: null,
  imageFileName: null,
  header: "",
  content: "",
  subjects: [""]
};

export default ServiceItem;
