const SectionHeading = ({ heading = "", subHeading = "" }) => {
  return (
    <div className="section-heading-wrapper">
      <h2>{heading}</h2>
      <p className="primary-text-lighten-10 sub-heading">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
