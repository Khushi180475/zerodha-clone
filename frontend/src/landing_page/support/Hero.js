import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-light py-4 px-5">
      <div className="d-flex justify-content-between align-items-center mb-4 p-3">
        <h4 className="fw-bold mb-0 fs-1 text-muted ">Support Portal</h4>
        <a href="" className="btn btn-primary">My tickets</a>
      </div>
      <div className="input-group mb-2" style={{ maxWidth: "100%" }}>
        <span className="input-group-text bg-white border-end-0">
          <i className="fa fa-search text-muted"></i>
        </span>
        <input
          type="text"
          className="form-control border-start-0 py-3"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
        />
      </div>
    </section>
  );
}

export default Hero;