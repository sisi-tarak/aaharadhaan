import React from "react";

const Donation = (props) => {
  const { donationCardsImg, title } = props.donationCard;
  return (
    <div className="card h-100 " style={{ backgroundColor: "  #04d6d6" }}>
      <div className="card-body text-center align-items-center my-5">
        <h1 className="card-title">
          <i className={donationCardsImg} alt="" 
             width="50" height="50">
          </i>
        </h1>
        <h3 className="card-text">
          <a
            href="/donationprocess"
            target="_blank"
            className="font-weight-bold stretched-link text-dark 
                       text-decoration-none"
          >

            {title}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Donation;
