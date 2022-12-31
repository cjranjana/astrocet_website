import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import { HashScroll } from "react-hash-scroll";
import "./styles.css";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split",
    "contact-form"
  );

  return (
    <HashScroll hash="#Contact" position="start">
      <section {...props} className={outerClasses}>
        <div className="container" style={{ justifyContent: "center" }}>
          <div className={`${innerClasses} flex flex-col justify-between`}>
            <h3 className="mb-2 mt-0">Contact</h3>
            <div className="contact-box flex flex-row justify-around">
              <div className="contact mr-7 flex flex-col">
                <p className="contact-name text-base font-semibold text-blue-100 mb-1">
                  Name
                </p>
                <a href="mailto:email" className="text-base text-blue-100 mb-1">
                  email
                </a>
                <a
                  href="tel:+918281359952"
                  className="text-base text-blue-100 mb-1"
                >
                  tel
                </a>
              </div>
              <div className="flex flex-col md:ml-0">
                <p className="text-base font-semibold text-blue-100 mb-1">
                  Name
                </p>
                <a href="mailto:email" className="text-base text-blue-100 mb-1">
                  email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HashScroll>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
