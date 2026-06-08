import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-2 border-top">
        <h1 className="text-center mt-5 text-muted">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-2 text-center ">
          <img
            src="media\KhushiAggarwal.png"
            style={{ borderRadius: "100%", width: "50%" }}
            className="p-2 mt-3 "
          />
          <h4 className="mt-3">Khushi Aggarwal</h4>
          <h6>Co-Founder, CTO</h6>
        </div>
        <div className="col-6 p-2 mt-5">
          <p>
            Khushi is a third-year student who built a full-scale Zerodha clone to deepen her understanding of India's financial markets and brokerage ecosystem.
          </p>
          <p>
            She has a strong interest in fintech and brings a hands-on approach to learning by building real-world applications.
          </p>
          <p>Cracking DSA problems is her zen.</p>
          <p>
            Connect on <a href="" style={{ textDecoration: "none" }}>Homepage</a> / <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> /{" "}
            <a href="" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;