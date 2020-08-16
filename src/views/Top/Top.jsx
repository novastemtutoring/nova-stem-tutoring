import React from "react";
import PropTypes from "prop-types";

import ImageCard from "components/ImageCard";


const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    // extraInfoPart = (
    // <Row>
    //   <Col>
    //     <Button
    //       size="xl"
    //       variant="primary"
    //       className="text-uppercase"
    //       href="https://jmhays.github.io"
    //     >
    //       My Academic Creds {emoji("👩🏻‍🎓")}
    //     </Button>
    //   </Col>
    //   <Col>
    //     <Button
    //       size='xl'
    //       variant="primary"
    //       className="text-uppercase"
    //       onClick={scrollToSection}
    //     >Covid-19 Information {emoji("🦠")} </Button>
    //   </Col>
    // </Row>
    // );
  }

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
