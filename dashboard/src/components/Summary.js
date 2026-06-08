import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const username = localStorage.getItem("username") || "User";

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://zerodha-clone-bozv.onrender.com/api/holdings", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setHoldings(res.data))
      .catch((err) => console.error(err));
  }, []);

  const totalInvestment = holdings.reduce((sum, s) => sum + s.avg * s.qty, 0);
  const totalCurrent = holdings.reduce((sum, s) => sum + s.price * s.qty, 0);
  const totalPnL = totalCurrent - totalInvestment;
  const pnlPercent = totalInvestment > 0
    ? ((totalPnL / totalInvestment) * 100).toFixed(2)
    : "0.00";
  const isPnLProfit = totalPnL >= 0;

  return (
    <div className="p-3">
      {/* Greeting */}
      <div className="mb-4">
        <h5 className="fw-semibold">Hi, {username}! 👋</h5>
        <hr />
      </div>

      {/* Equity section */}
      <div className="mb-4">
        <p className="text-muted small fw-semibold text-uppercase mb-2">Equity</p>
        <div className="row g-3">
          <div className="col-sm-6">
            <div className="border rounded p-3">
              <h4 className="fw-bold mb-0 text-primary">3.74k</h4>
              <p className="text-muted small mb-0 mt-1">Margin available</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="border rounded p-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-muted small">Margins used</span>
                <span className="small fw-semibold">0</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-muted small">Opening balance</span>
                <span className="small fw-semibold">3.74k</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      {/* Holdings summary */}
      <div className="mb-4">
        <p className="text-muted small fw-semibold text-uppercase mb-2">
          Holdings ({holdings.length})
        </p>
        <div className="row g-3">
          <div className="col-sm-4">
            <div className="border rounded p-3">
              <h5 className={`fw-bold mb-0 ${isPnLProfit ? "text-success" : "text-danger"}`}>
                {isPnLProfit ? "+" : ""}₹{totalPnL.toFixed(2)}
                <small className="fs-6"> ({isPnLProfit ? "+" : ""}{pnlPercent}%)</small>
              </h5>
              <p className="text-muted small mb-0 mt-1">P&L</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="border rounded p-3">
              <h5 className="fw-bold mb-0">₹{totalCurrent.toFixed(2)}</h5>
              <p className="text-muted small mb-0 mt-1">Current value</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="border rounded p-3">
              <h5 className="fw-bold mb-0">₹{totalInvestment.toFixed(2)}</h5>
              <p className="text-muted small mb-0 mt-1">Investment</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Summary;