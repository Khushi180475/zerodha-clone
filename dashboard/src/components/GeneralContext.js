import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import AnalyticsWindow from "./AnalyticsWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  openAnalyticsWindow: (uid, price) => {},
  closeAnalyticsWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  // ── Buy ──────────────────────────────────────────────────
  const handleOpenBuyWindow = (uid) => {
    setIsSellWindowOpen(false);
    setIsAnalyticsOpen(false);
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // ── Sell ─────────────────────────────────────────────────
  const handleOpenSellWindow = (uid) => {
    setIsBuyWindowOpen(false);
    setIsAnalyticsOpen(false);
    setSelectedStockUID(uid);
    setIsSellWindowOpen(true);
  };
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  // ── Analytics ────────────────────────────────────────────
  const handleOpenAnalyticsWindow = (uid, price) => {
    setIsBuyWindowOpen(false);
    setIsSellWindowOpen(false);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
    setIsAnalyticsOpen(true);
  };
  const handleCloseAnalyticsWindow = () => {
    setIsAnalyticsOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        openAnalyticsWindow: handleOpenAnalyticsWindow,
        closeAnalyticsWindow: handleCloseAnalyticsWindow,
      }}
    >
      {props.children}

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
      {isAnalyticsOpen && (
        <AnalyticsWindow
          uid={selectedStockUID}
          currentPrice={selectedStockPrice}
          onClose={handleCloseAnalyticsWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;