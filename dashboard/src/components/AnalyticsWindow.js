import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Generate realistic-looking mock price data
const generateMockPrices = (basePrice, days = 30) => {
  const prices = [];
  let price = basePrice * 0.85; // start a bit lower
  for (let i = 0; i < days; i++) {
    const change = (Math.random() - 0.48) * basePrice * 0.02;
    price = Math.max(price + change, basePrice * 0.7);
    prices.push(parseFloat(price.toFixed(2)));
  }
  // make sure last price is close to basePrice
  prices[days - 1] = basePrice;
  return prices;
};

// Generate last N days labels
const generateDateLabels = (days = 30) => {
  const labels = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    labels.push(
      d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" })
    );
  }
  return labels;
};

const AnalyticsWindow = ({ uid, currentPrice, onClose }) => {
  const prices = generateMockPrices(currentPrice || 100);
  const labels = generateDateLabels(30);

  const isUp = prices[prices.length - 1] >= prices[0];
  const color = isUp ? "#27ae60" : "#e74c3c";
  const bgColor = isUp ? "rgba(39,174,96,0.08)" : "rgba(231,76,60,0.08)";

  const change = prices[prices.length - 1] - prices[0];
  const changePct = ((change / prices[0]) * 100).toFixed(2);

  const data = {
    labels,
    datasets: [
      {
        label: uid,
        data: prices,
        borderColor: color,
        backgroundColor: bgColor,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `₹${ctx.parsed.y.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { maxTicksLimit: 6, font: { size: 10 } },
      },
      y: {
        grid: { color: "#f0f0f0" },
        ticks: {
          font: { size: 10 },
          callback: (val) => `₹${val}`,
        },
      },
    },
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        left: "380px",
        zIndex: 9999,
        width: "480px",
        borderRadius: "10px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
        <div>
          <span className="fw-bold fs-6">{uid}</span>
          <span
            className="ms-2 small fw-semibold"
            style={{ color }}
          >
            ₹{currentPrice}{" "}
            <span>
              ({change >= 0 ? "+" : ""}{change.toFixed(2)} / {change >= 0 ? "+" : ""}{changePct}%)
            </span>
          </span>
        </div>
        <button
          className="btn-close"
          style={{ fontSize: "10px" }}
          onClick={onClose}
        />
      </div>

      {/* Chart */}
      <div className="p-3">
        <div className="d-flex gap-2 mb-2">
          {["1D", "1W", "1M", "3M", "1Y"].map((t) => (
            <button
              key={t}
              className={`btn btn-sm px-2 py-0 ${t === "1M" ? "btn-primary" : "btn-outline-secondary"}`}
              style={{ fontSize: "11px" }}
            >
              {t}
            </button>
          ))}
        </div>
        <Line data={data} options={options} />
      </div>

      {/* Stats */}
      <div className="px-3 pb-3">
        <div className="row g-2">
          {[
            { label: "Open", value: `₹${prices[0]}` },
            { label: "High", value: `₹${Math.max(...prices).toFixed(2)}` },
            { label: "Low", value: `₹${Math.min(...prices).toFixed(2)}` },
            { label: "Close", value: `₹${currentPrice}` },
          ].map((stat) => (
            <div key={stat.label} className="col-3">
              <div className="bg-light rounded p-2 text-center">
                <div className="text-muted" style={{ fontSize: "10px" }}>
                  {stat.label}
                </div>
                <div className="fw-semibold" style={{ fontSize: "12px" }}>
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsWindow;