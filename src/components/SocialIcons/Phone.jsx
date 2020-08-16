import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Phone = ({ userName }) => (
    <CircleIcon href={`tel:${userName}`} iconName="PhoneIcon" />
);

Phone.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default Phone;
