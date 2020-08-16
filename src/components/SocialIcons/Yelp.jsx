import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Yelp = ({ userName }) => (
    <CircleIcon href={`https://www.yelp.com/biz/${userName}-south-riding`} iconName="YelpIcon" />
);

Yelp.propTypes = {
    userName: PropTypes.string.isRequired,
};

export default Yelp;
