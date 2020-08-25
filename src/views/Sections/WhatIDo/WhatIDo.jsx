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

    const { className, anchor, jumpToAnchor, info } = frontmatter;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const scrollToSection = useSmoothScrollTo(jumpToAnchor);

    return (
        <>
            <PageSection className={className} id={anchor}>
                <Row className='h1'>
                    <SectionHeader
                        header="tl;dr"
                        myEmoji="👩‍🎓"
                    />
                </Row>
                <Row className="h4" >
                    <Col className='text-center'>
                        I help college and advanced high school students become better scientists.
                </Col>
                </Row>
                <Row>

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
            <PageSection>
                <Row className="h2">
                    <SectionHeader header="So... you're a tutor, right?" />
                </Row>
                <Row className="h3">
                    <Col className='text-center'>
                        Well, yes and no.</Col>
                </Row>
                <Row className="h6">
                    <Col className='text-center'>
                        Think of me as your Academic Big Sister {emoji("👩‍👧")}.
                     My primary goal is to help you achieve success in your current
                    academic situation (translation: yep, I&apos;m going to answer questions
                    about your AP Calculus homework {emoji("👍")}).
                </Col>
                </Row>
                <Row className="h3">
                    <Col className='text-center'>
                        Here&apos;s the thing.
                </Col>
                </Row>
                <Row className='h6'>
                    <Col className='text-center'>
                        After 5+ years of working with undergraduate students,
                        I&apos;ve found that conversations about physics homework always
                        lead to general questions about how to succeed in the sciences {emoji("💪")}.
                        The reason is really simple: you want to know whether what you&apos;re
                        learning now will be something you use later in your career!
                    </Col>
                </Row>
                <Row className="h4">
                    <Col className='text-center'>
                        I&apos;ve been through the system, high school through grad school.
                </Col>
                </Row>
                <Row className='h6'>
                    <Col className='text-right'>
                        You have only so much mental bandwidth and <em>so much</em> to learn.
                        Spend your time and energy on the material that actually matters, taught
                        by someone who knows what you need to know. Want to learn more about my
                        training? {emoji("👉")}
                    </Col>
                    <Col className='text-left'>
                        <Button
                            size="xl"
                            variant="primary"
                            className="text-uppercase"
                            href="https://jmhays.github.io"
                        >
                            My Academic Creds {emoji("👩🏻‍🎓")}
                        </Button>
                    </Col>
                </Row>
            </PageSection></>
    );
};

WhatIDo.propTypes = {
    frontmatter: PropTypes.object,
};

WhatIDo.defaultProps = {
    frontmatter: null,
};

export default WhatIDo;
