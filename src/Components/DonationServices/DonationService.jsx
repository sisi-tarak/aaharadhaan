import React from "react";

const DonationService = (props) => {
  const { donationServicesImg, title, excerpt } = props.donationService;
  return (
    <div className="service-item">
      <div className="icon pt-3">
        <i className={donationServicesImg} width="35" height="35"></i>
      </div>
      <h3 className="font-weight-bold">{title}</h3>
      <p className="font-weight-light">{excerpt}</p>
      <a
        href="/donationprocess"
        className="readmore stretched-link font-weight-normal "
      >
        Read more
      </a>
    </div>
  );
};

export default DonationService;

