import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import { HashScroll } from "react-hash-scroll";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "About Us",
    paragraph: "",
  };

  return (
    <HashScroll hash="#About" position="start">
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
            <div className={splitClasses}>
              <div className="split-item">
                <div
                  className="split-item-content center-content-mobile reveal-from-right"
                  data-reveal-container=".split-item"
                >
                  {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                  <h3 className="mt-0 mb-12">ABOUT US</h3>
                  <p className="m-0">
                  AstroCET, the astronomical club of CET, 
                  is a group of students space enthusiasts who are fascinated by all that is space and are driven by passion to know more about the cosmos. 
                  In an effort to pique student's interest in space exploration, the group organises a variety of astronomy and aerospace-related events at the campus.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile reveal-from-bottom",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container=".split-item"
                >
                  <Image
                    src={require("./../../assets/images/About.jpeg")}
                    alt="About"
                    width={528}
                    height={396}
                  />
                </div>
              </div>

              <div className="split-item">
                <div
                  className="split-item-content center-content-mobile reveal-from-left"
                  data-reveal-container=".split-item"
                >
                  <h3 className="mt-0 mb-12">OBJECTIVES</h3>
                  <div className="m-0">
                    <ul>
                      <li>
                      To cultivate an interest among the students in astronomy, aerospace, and allied areas.
                      </li>
                      <li>
                      To apply engineering knowledge to solve the problems faced by humanity in the field of aerospace.

                      </li>
                      <li>
                        To facilitate the development of the necessary leadership, management and communication skills among the students.
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile reveal-from-bottom",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container=".split-item"
                >
                  <Image
                    src={require("./../../assets/images/Objectives.jpg")}
                    alt="Features split 03"
                    width={528}
                    height={396}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HashScroll>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
