import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAllOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "300px" }}
      >
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  // No orders yet
  if (allOrders.length === 0) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{ minHeight: "300px" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png"
          alt="No orders"
          style={{ width: "80px", opacity: 0.3 }}
          className="mb-3"
        />
        <p className="text-muted mb-3">You haven't placed any orders yet</p>
        <Link to="/" className="btn btn-primary btn-sm px-4">
          Get started
        </Link>
      </div>
    );
  }

  return (
    <div className="p-3">
      <h6 className="text-muted fw-semibold mb-3">
        Orders ({allOrders.length})
      </h6>

      <div className="table-responsive">
        <table className="table table-hover table-sm align-middle">
          <thead className="table-light">
            <tr>
              <th className="text-muted fw-semibold small">Instrument</th>
              <th className="text-muted fw-semibold small">Qty.</th>
              <th className="text-muted fw-semibold small">Price</th>
              <th className="text-muted fw-semibold small">Type</th>
              <th className="text-muted fw-semibold small">Date & Time</th>
              <th className="text-muted fw-semibold small">Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr key={index}>
                <td className="fw-semibold small">{order.name}</td>
                <td className="small">{order.qty}</td>
                <td className="small">₹{order.price.toFixed(2)}</td>
                <td>
                  <span
                    className={`badge ${
                      order.mode === "BUY" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {order.mode}
                  </span>
                </td>
                <td className="small text-muted">
                  {new Date(order.createdAt).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td>
                  <span className="badge bg-success bg-opacity-10 text-success">
                    Executed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;