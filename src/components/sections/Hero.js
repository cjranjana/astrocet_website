import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";

import "./Hero.scss";
import { HashScroll } from "react-hash-scroll";
const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <HashScroll hash="#Home" position="start">
      <section {...props} className={`${outerClasses} hero`}>
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                <span className="text-color-light para title">astrocet</span>
              </h1>
              <div className="container-xs">
                <p
                  className="m-0 mb-32 text-color-light reveal-from-bottom para"
                  data-reveal-delay="400"
                >
                  COLLEGE OF ENGINEERING, TRIVANDRUM
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  {/* <ButtonGroup>
                  <Button tag="a" color='primary' style={{ outline: '1px solid #5658dd', backgroundColor: 'transparent' }} wideMobile href="#">
                    Join US
                  </Button>
                   <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button> 
                </ButtonGroup> */}
                </div>
              </div>
            </div>

            {/* <Image
            className="has-shadow"
            src={require("./../../assets/images/design1.png")}
            alt="Hero"
            width={896}
            height={504}
          /> */}
          </div>
        </div>
      </section>
    </HashScroll>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
