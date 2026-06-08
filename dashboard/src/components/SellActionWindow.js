import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    setLoading(true);
    setError("");
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "https://zerodha-clone-bozv.onrender.com/api/orders",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess(true);
      setTimeout(() => {
        generalContext.closeSellWindow();
      }, 1000);
    } catch (err) {
      setError("Order failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        left: "380px",
        zIndex: 9999,
        width: "360px",
        borderRadius: "8px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        overflow: "hidden",
        background: "#fff",
      }}
      draggable="true"
    >
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center px-3 py-2"
        style={{ background: "#e74c3c" }}
      >
        <div>
          <span className="fw-bold text-white fs-6">{uid}</span>
          <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.8)" }}>
            Regular Market Order
          </div>
        </div>
        <span className="badge bg-white text-danger fw-bold">SELL</span>
      </div>

      {/* Inputs */}
      <div className="p-3">
        <div className="row g-2 mb-3">
          <div className="col-6">
            <label className="form-label small text-muted mb-1">Qty.</label>
            <input
              type="number"
              className="form-control form-control-sm"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label className="form-label small text-muted mb-1">Price</label>
            <input
              type="number"
              className="form-control form-control-sm"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Success / Error */}
        {success && (
          <div className="alert alert-success py-1 text-center small mb-2">
            ✅ Order placed successfully!
          </div>
        )}
        {error && (
          <div className="alert alert-danger py-1 text-center small mb-2">
            {error}
          </div>
        )}

        {/* Footer */}
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            Margin required: <strong>₹140.65</strong>
          </small>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-danger px-3"
              onClick={handleSellClick}
              disabled={loading}
            >
              {loading ? "Placing..." : "Sell"}
            </button>
            <button
              className="btn btn-sm btn-outline-secondary px-3"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;