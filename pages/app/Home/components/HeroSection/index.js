import { Button, Col, Row } from "antd";
import { HERO_RIGHT_IMAGE } from "assets";

const HeroSection = () => {
  return (
    <section className="hero-section container" id="hero-section">
      <Row className="flex-1">
        <Col
          xs={{
            order: 2,
            span: 24,
          }}
          md={{
            order: 1,
            span: 14,
          }}
          className="hero-left"
        >
          <div className="hero-left-inner">
            <h1 className="hero-heading primary-text-color text-huge">
              Etsy Listing Data, Simplified and Automated
            </h1>
            <p className="hero-paragraph line-height-30 text-18">
              ePrimeData empowers brands with ready-to-use and fully
              customizable KPIs and dashboards that go way beyond traditional
              reporting, while simplifying data management and workflows.
            </p>
            <Button type="primary" className="custom-btn btn-shadow">
              Sign up Now
            </Button>
          </div>
        </Col>
        <Col
          xs={{
            order: 1,
            span: 24,
          }}
          md={{
            order: 1,
            span: 10,
          }}
          className="hero-right"
        >
          <img src={HERO_RIGHT_IMAGE} alt="" />
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
