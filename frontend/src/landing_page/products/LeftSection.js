import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-5">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-5 mt-2">
          <h1 className="fs-2 text-muted">{productName}</h1>
          <p className="mt-4 mb-4 text-muted ">{productDesription}</p>
          <div>
            <a href={tryDemo} className="mt-5 text-center " style={{ marginRight: "50px" , textDecoration: "none" }}>
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href={learnMore} className="mt-5 mb-4 text-center" style={{ marginLeft: "50px" , textDecoration: "none" }}>
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay} className="mt-3 text-center" >
              <img src="media/googlePlayBadge.svg" />
            </a>
            <a href={appStore} className="mt-3 text-center" >
              <img
                src="media/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;