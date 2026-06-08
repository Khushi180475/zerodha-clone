import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/holdings", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAllHoldings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
        setLoading(false);
      });
  }, []);

  const labels = allHoldings.map((s) => s.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((s) => s.price),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const totalInvestment = allHoldings.reduce((sum, s) => sum + s.avg * s.qty, 0);
  const totalCurrent = allHoldings.reduce((sum, s) => sum + s.price * s.qty, 0);
  const totalPnL = totalCurrent - totalInvestment;
  const pnlPercent = totalInvestment > 0 ? ((totalPnL / totalInvestment) * 100).toFixed(2) : 0;
  const isPnLProfit = totalPnL >= 0;

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="holdings-container p-3">
      <h6 className="title mb-3 text-muted fw-semibold">
        Holdings ({allHoldings.length})
      </h6>

      {allHoldings.length === 0 ? (
        <div className="text-center text-muted py-5">
          <p>No holdings found. Start investing to see your portfolio here.</p>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="table-responsive mb-4">
            <table className="table table-hover table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th className="text-muted fw-semibold small">Instrument</th>
                  <th className="text-muted fw-semibold small">Qty.</th>
                  <th className="text-muted fw-semibold small">Avg. cost</th>
                  <th className="text-muted fw-semibold small">LTP</th>
                  <th className="text-muted fw-semibold small">Cur. val</th>
                  <th className="text-muted fw-semibold small">P&L</th>
                  <th className="text-muted fw-semibold small">Net chg.</th>
                  <th className="text-muted fw-semibold small">Day chg.</th>
                </tr>
              </thead>
              <tbody>
                {allHoldings.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const pnl = curValue - stock.avg * stock.qty;
                  const isProfit = pnl >= 0;

                  return (
                    <tr key={index}>
                      <td className="fw-semibold small">{stock.name}</td>
                      <td className="small">{stock.qty}</td>
                      <td className="small">{stock.avg.toFixed(2)}</td>
                      <td className="small">{stock.price.toFixed(2)}</td>
                      <td className="small">{curValue.toFixed(2)}</td>
                      <td className={`small fw-semibold ${isProfit ? "text-success" : "text-danger"}`}>
                        {pnl.toFixed(2)}
                      </td>
                      <td className={`small ${isProfit ? "text-success" : "text-danger"}`}>
                        {stock.net}
                      </td>
                      <td className={`small ${stock.isLoss ? "text-danger" : "text-success"}`}>
                        {stock.day}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Summary row */}
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="bg-light rounded p-3">
                <p className="text-muted small mb-1">Total investment</p>
                <h5 className="fw-bold mb-0">₹{totalInvestment.toFixed(2)}</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-light rounded p-3">
                <p className="text-muted small mb-1">Current value</p>
                <h5 className="fw-bold mb-0">₹{totalCurrent.toFixed(2)}</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`rounded p-3 ${isPnLProfit ? "bg-success" : "bg-danger"} bg-opacity-10`}>
                <p className="text-muted small mb-1">P&L</p>
                <h5 className={`fw-bold mb-0 ${isPnLProfit ? "text-success" : "text-danger"}`}>
                  {isPnLProfit ? "+" : ""}₹{totalPnL.toFixed(2)}{" "}
                  <small>({isPnLProfit ? "+" : ""}{pnlPercent}%)</small>
                </h5>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-light rounded p-3">
            <VerticalGraph data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Holdings;