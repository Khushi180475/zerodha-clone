import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Menu from "./Menu"; // Restored standard Header Layout
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  // Dynamically inject Bootstrap CDN if not loaded globally to keep styling intact
  useEffect(() => {
    const linkId = 'bootstrap-cdn-dashboard';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100 bg-white" style={{ fontFamily: 'sans-serif' }}>

      {/* 1. Global Navigation Top Header */}
      <header className="w-100 bg-white border-bottom shadow-sm sticky-top" style={{ height: "60px", zIndex: 1050 }}>
        <Menu />
      </header>

      {/* 2. Main Layout Workspace split into Side Watchlist & Dynamic Workspace Content */}
      <div className="d-flex flex-grow-1 w-100 m-0 p-0 position-relative" style={{ height: "calc(100vh - 60px)", overflow: "hidden" }}>

        <GeneralContextProvider>
          {/* Left Sticky Watchlist Panel */}
          <aside className="border-right bg-white h-100 d-none d-md-block" style={{ width: "360px", minWidth: "320px", borderRight: "1px solid #e0e0e0" }}>
            <WatchList />
          </aside>

          {/* Right Fluid Scrollable Core Action Workspace Viewports */}
          <main className="flex-grow-1 h-100 overflow-y-auto bg-white px-4 py-3">
            <div className="container-fluid m-0 p-0">
              <Routes>
                <Route index element={<Summary />} />        {/* default: /dashboard */}
                <Route path="orders" element={<Orders />} />
                <Route path="holdings" element={<Holdings />} />
                <Route path="positions" element={<Positions />} />
                <Route path="funds" element={<Funds />} />
                <Route path="apps" element={<Apps />} />
              </Routes>
            </div>
          </main>
        </GeneralContextProvider>

      </div>
    </div>
  );
};

export default Dashboard;