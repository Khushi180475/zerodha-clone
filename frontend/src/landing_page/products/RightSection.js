import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5 mt-5" >
          <h1  className="fs-2 text-muted mt-5">{productName}</h1>
          <p className="mt-4 mb-4 text-muted">{productDesription}</p>
          <div>
            <a href={learnMore} className="mt-5 mb-4 " style={{ textDecoration: "none" }}>
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;