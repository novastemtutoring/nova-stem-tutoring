import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Button, Alert } from "react-bootstrap";

// import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Covid = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, subheader: rootSubHeader, content } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row>
                <SectionHeader
                    header="Coronavirus information" myEmoji="🦠" />
            </Row>
            <Row className="h3">
                <Col className="text-center">
                    <Alert className="alert-danger" >
                        {rootSubHeader}
                    </Alert>
                </Col>
            </Row>
            <Row>
                <p>{content}</p>
            </Row>
            <Row>
                <Col>
                    <Button
                        size='xl'
                        href="https://edu.google.com/products/jamboard/?modal_active=none">
                        Google Meet
                    </Button>
                </Col>
                <Col>
                    <Button
                        size='xl'
                        href="https://edu.google.com/products/jamboard/?modal_active=none">
                        Jamboard
                        </Button>
                </Col>
                <Col>
                    <Button
                        size='xl'
                        href="https://edu.google.com/products/classroom/?modal_active=none">
                        Google Classroom
                        </Button>
                </Col>
            </Row>
        </PageSection>
    );
};

Covid.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Covid.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Covid;
