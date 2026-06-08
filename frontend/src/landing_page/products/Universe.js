import React from "react";

function Universe() {
  const partners = [
    {
      image: "media/zerodhaFundhouse.png",
      description: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "media/sensibullLogo.svg",
      description: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      image: "media/tijori.svg",
      description: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      image: "media/streakLogo.png",
      description: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      image: "media/smallcaseLogo.png",
      description: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      image: "media/dittoLogo.png",
      description: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row text-center justify-content-center">
        <h1 className="fs-2 mt-5">The Zerodha Universe</h1>
        <p className="mt-3 text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>

        {partners.map((partner, index) => (
          <div key={index} className="col-4 p-2 mt-5 ">
            {/* Added style to keep logos consistent in height */}
            <img src={partner.image} style={{ height: "50px", objectFit: "contain" }} alt="Partner Logo" />
            <p className="text-muted mt-3" style={{ fontSize: "12px", padding: "0 20px" }}>
              {partner.description}
            </p>
          </div>
        ))}

        <button
          className="btn btn-primary fs-5 mt-5 mb-5 fw-medium"
          style={{ width: "200px", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;