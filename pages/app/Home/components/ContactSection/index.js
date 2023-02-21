import { Button, Col, Row } from "antd";
import { CONTACT_US_IMAGE } from "assets";

const ContactSection = () => {
  return (
    <section className="contact-section container" id="contact-section">
      <Row gutter={[20, 20]}>
        <ContactLeft />
        <Col
          xs={{
            order: 1,
            span: 24,
          }}
          md={{
            order: 2,
            span: 8,
          }}
          className="contact-right"
        >
          <img src={CONTACT_US_IMAGE} alt="" />
        </Col>
      </Row>
    </section>
  );
};

const ContactLeft = () => {
  const openEmail = () => {
    const email =
      "mailto:eprimedata@gmail.com?subject=SendMail&body=Description";
    window.open(email, "_blank");
  };
  return (
    <Col
      xs={{
        order: 2,
        span: 24,
      }}
      md={{
        order: 1,
        span: 16,
      }}
      className="contact-left"
    >
      <h1 className="text-xlarge">Contact Us</h1>
      <p className="line-height-25">
        Please drop us an email at the email address below for any questions,
        issues or if you just want to say hello!
      </p>
      <Button className="custom-btn" type="primary" onClick={openEmail}>
        eprimedata@gmail.com
      </Button>
    </Col>
  );
};

export default ContactSection;
