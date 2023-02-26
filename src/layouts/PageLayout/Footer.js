import { Button, Col, Form, Input, Row } from "antd";
import { FOOTER_LOGO } from "assets";

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={6} className="footer-logo">
            <img src={FOOTER_LOGO} />
            <div className="contact-info">
              <p>9 Ellingwood Court, Markham,</p>
              <p>ON, L3R8A8,</p>
              <p>Canada</p>
              <p>+1 (416) 918-7292</p>
            </div>
          </Col>
          <Col xs={24} sm={18}>
            <Row gutter={[20, 30]}>
              <Col xs={12} sm={12} lg={8}>
                <TopFive />
              </Col>
              <Col xs={12} sm={12} lg={8}>
                <Resources />
              </Col>

              <Col xs={24} sm={12} lg={8}>
                <Subscribe />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

const Resources = () => (
  <div className="resources">
    <h3 className="blue-heading letter-spacing-4">RESOURCES</h3>
    <h4 className="light-blue-heading letter-spacing-2">FREE COURSES</h4>
    <div className="resources-text-wrapper">
      <p className="m-0">How to Sell on Etsy</p>
      <p className="m-0">Eyst PPC Playbook</p>
    </div>
    <h4 className="light-blue-heading letter-spacing-2">HOW-TO</h4>
    <div className="resources-text-wrapper">
      <p className="m-0">Seller Podcast: Follow the Data</p>
    </div>
  </div>
);

const TopFive = () => (
  <div className="top-five">
    <h3 className="blue-heading letter-spacing-4">TOP FIVE</h3>
    <h4 className="light-blue-heading letter-spacing-2">TOOLS</h4>
    <div className="tools-wrapper">
      {tools.map((tool) => (
        <p className="m-0" key={tool}>
          {tool}
        </p>
      ))}
    </div>
  </div>
);

const Subscribe = () => (
  <div className="subscribe">
    <h3 className="blue-heading letter-spacing-4">SUBSCRIBE</h3>
    <p>Subscribe use for newlestter</p>
    <Form>
      <Form.Item>
        <Input placeholder="Enter your Email" />
      </Form.Item>
      <Button type="primary">Submit</Button>
    </Form>
  </div>
);

const tools = [
  "Main Searching",
  "Product Searching",
  "Events Calendar",
  "Profit Calculator",
  "Comparisons",
];

export default PageFooter;
