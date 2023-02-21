import { Col, Row, Grid, Space } from "antd";
import { SectionHeading } from "global/components";
import solutions from "./data.json";

const { useBreakpoint } = Grid;
const SolutionsSection = () => {
  const screens = useBreakpoint();
  return (
    <section className="solutions-section container" id="tools-section">
      <SectionHeading
        heading="One Platform - Five Solutions"
        subHeading="Find the perfect plan that fits your business"
      />

      <Row className="solutions-listing" gutter={[0, 60]}>
        {solutions.map((solution, index) => (
          <Col key={index} span={24}>
            {
              <SolutionSection
                {...solution}
                key={solution?.heading}
                isMdBreakpoint={screens.md}
              />
            }
          </Col>
        ))}
      </Row>
    </section>
  );
};

const SolutionSection = (props) => (
  <Row gutter={[20, 20]}>
    <SolutionLeft {...props} />
    <SolutionRight {...props} />
  </Row>
);

const SolutionLeft = ({ heading, features, isImageFirst }) => (
  <Col xs={24} md={10} order={isImageFirst ? 1 : 0}>
    <h2>{heading}</h2>
    <Space direction="vertical">
      {features.map((feature, index) => (
        <div key={index} className="feature-text">
          <h3>{feature.heading}</h3>
          <p className="m-0 ">{feature.description}</p>
        </div>
      ))}
    </Space>
  </Col>
);

const SolutionRight = ({ isMdBreakpoint, img, isImageFirst }) => (
  <Col
    xs={24}
    md={14}
    className={`feature-image-wrapper ${isImageFirst ? "" : "odd"} ${
      isMdBreakpoint ? "isMd" : ""
    } `}
    order={isImageFirst ? 0 : 1}
  >
    <img
      src={require(`../../../../../assets/directory/images/${img}`)}
      alt="feature"
    />
  </Col>
);

export default SolutionsSection;
