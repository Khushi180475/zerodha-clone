import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://zerodha-clone-bozv.onrender.com/api/positions", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAllPositions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    <div className="p-3">
      <h6 className="title mb-3 text-muted fw-semibold">
        Positions ({allPositions.length})
      </h6>

      {allPositions.length === 0 ? (
        <div className="text-center text-muted py-5">
          <p>No open positions.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-sm align-middle">
            <thead className="table-light">
              <tr>
                <th className="text-muted fw-semibold small">Product</th>
                <th className="text-muted fw-semibold small">Instrument</th>
                <th className="text-muted fw-semibold small">Qty.</th>
                <th className="text-muted fw-semibold small">Avg.</th>
                <th className="text-muted fw-semibold small">LTP</th>
                <th className="text-muted fw-semibold small">P&L</th>
                <th className="text-muted fw-semibold small">Chg.</th>
              </tr>
            </thead>
            <tbody>
              {allPositions.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const pnl = curValue - stock.avg * stock.qty;
                const isProfit = pnl >= 0;

                return (
                  <tr key={index}>
                    <td><span className="badge bg-secondary">{stock.product}</span></td>
                    <td className="fw-semibold small">{stock.name}</td>
                    <td className="small">{stock.qty}</td>
                    <td className="small">{stock.avg.toFixed(2)}</td>
                    <td className="small">{stock.price.toFixed(2)}</td>
                    <td className={`small fw-semibold ${isProfit ? "text-success" : "text-danger"}`}>
                      {pnl.toFixed(2)}
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
      )}
    </div>
  );
};

export default Positions;