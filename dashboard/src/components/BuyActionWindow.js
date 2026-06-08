import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
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
          mode: "BUY",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess(true);
      setTimeout(() => {
        generalContext.closeBuyWindow();
      }, 1000);
    } catch (err) {
      console.error("Order failed:", err);
      setError("Unable to place order. Please check server connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div 
      className="position-fixed top-50 start-50 translate-middle bg-white border rounded shadow-lg animate-fade-in"
      style={{ width: "100%", maxWidth: "390px", zIndex: 1200, overflow: "hidden" }}
    >
      {/* Header Band Strip */}
      <div className="bg-primary text-white p-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: "#4184f3 !important" }}>
        <div>
          <h3 className="m-0 fs-6 fw-semibold text-white">{uid}</h3>
          <span style={{ fontSize: "11px", opacity: 0.85 }}>Regular Market Order</span>
        </div>
        <span className="badge bg-success px-2 py-1">BUY</span>
      </div>

      {/* Input Core Form Section */}
      <div className="p-3">
        <div className="row g-3">
          {/* Quantity Input Form Block */}
          <div className="col-6">
            <label className="form-label text-muted small fw-medium mb-1">Qty.</label>
            <input
              type="number"
              className="form-control form-control-lg fs-6 py-2"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              style={{ borderRadius: "4px", borderColor: "#ced4da" }}
            />
          </div>
          
          {/* Price Input Form Block */}
          <div className="col-6">
            <label className="form-label text-muted small fw-medium mb-1">Price</label>
            <input
              type="number"
              className="form-control form-control-lg fs-6 py-2"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              style={{ borderRadius: "4px", borderColor: "#ced4da" }}
            />
          </div>
        </div>

        {/* Message Alert State Handlers */}
        {success && (
          <div className="alert alert-success py-2 text-center small border-0 mt-3 mb-0">
            ✅ Order placed successfully!
          </div>
        )}
        {error && (
          <div className="alert alert-danger py-2 text-center small border-0 mt-3 mb-0">
            ❌ {error}
          </div>
        )}
      </div>

      {/* Control Actions & Pricing Matrix Layout Footer */}
      <div className="bg-light p-3 border-top d-flex align-items-center justify-content-between">
        <div className="text-muted" style={{ fontSize: "12px" }}>
          Margin required: <span className="fw-semibold text-dark">₹{(stockQuantity * (stockPrice || 140.65)).toFixed(2)}</span>
        </div>
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary btn-sm px-3 fw-medium m-0"
            style={{ backgroundColor: "#4184f3", border: "none", borderRadius: "3px" }}
            onClick={handleBuyClick}
            disabled={loading}
          >
            {loading ? "Placing..." : "Buy"}
          </button>
          <button 
            className="btn btn-sm px-3 fw-medium m-0" 
            style={{ backgroundColor: "#e0e0e0", color: "#495057", border: "none", borderRadius: "3px" }}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;