import React from "react";
import PropTypes from "prop-types";


import { Row, Col, Button } from 'react-bootstrap';
import emoji from 'react-easy-emoji';
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import useSmoothScrollTo from '../../../hooks/useSmoothScrollTo';


const WhatIDo = ({ frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { className, anchor, jumpToAnchor } = frontmatter;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const scrollToSection = useSmoothScrollTo(jumpToAnchor);

    return (
        <PageSection className={className} id={anchor}>
            <Row>
                <SectionHeader
                    header="tl;dr"
                    myEmoji="👩‍🎓"
                />
            </Row>
            <Row className="h4" >
                <Col className='text-center'>
                    I am tutor in the northern Virginia area.
                    I specialize in STEM subjects for advanced high school
                    and first-year college students.
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <Button
                        size="xl"
                        variant="primary"
                        className="text-uppercase"
                        href="https://jmhays.github.io"
                    >
                        My Academic Creds {emoji("👩🏻‍🎓")}
                    </Button>
                </Col>
                <Col className='text-center'>
                    <Button
                        size='xl'
                        variant="primary"
                        className="text-uppercase"
                        onClick={scrollToSection}
                    >Covid-19 Information {emoji("🦠")} </Button>
                </Col>
            </Row >
        </PageSection >
    );
};

WhatIDo.propTypes = {
    frontmatter: PropTypes.object,
};

WhatIDo.defaultProps = {
    frontmatter: null,
};

export default WhatIDo;
