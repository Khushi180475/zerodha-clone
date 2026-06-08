import React, { useState } from 'react';

const equityData = [
    {
        label: 'Brokerage',
        delivery: 'Zero Brokerage',
        intraday: '0.03% or ₹20/executed order whichever is lower',
        futures: '0.03% or ₹20/executed order whichever is lower',
        options: 'Flat ₹20 per executed order',
    },
    {
        label: 'STT/CTT',
        delivery: '0.1% on buy & sell',
        intraday: '0.025% on the sell side',
        futures: '0.02% on the sell side',
        options: (
            <ul className="ps-3 mb-0">
                <li className="mb-1">0.125% of the intrinsic value on options that are bought and exercised</li>
                <li>0.1% on sell side (on premium)</li>
            </ul>
        ),
    },
    {
        label: 'Transaction charges',
        delivery: <><div>NSE: 0.00307%</div><div>BSE: 0.00375%</div></>,
        intraday: <><div>NSE: 0.00307%</div><div>BSE: 0.00375%</div></>,
        futures: <><div>NSE: 0.00183%</div><div>BSE: 0</div></>,
        options: <><div>NSE: 0.03553% (on premium)</div><div>BSE: 0.0325% (on premium)</div></>,
    },
    {
        label: 'GST',
        delivery: '18% on (brokerage + SEBI charges + transaction charges)',
        intraday: '18% on (brokerage + SEBI charges + transaction charges)',
        futures: '18% on (brokerage + SEBI charges + transaction charges)',
        options: '18% on (brokerage + SEBI charges + transaction charges)',
    },
    {
        label: 'SEBI charges',
        delivery: '₹10 / crore',
        intraday: '₹10 / crore',
        futures: '₹10 / crore',
        options: '₹10 / crore',
    },
    {
        label: 'Stamp charges',
        delivery: '0.015% or ₹1500 / crore on buy side',
        intraday: '0.003% or ₹300 / crore on buy side',
        futures: '0.002% or ₹200 / crore on buy side',
        options: '0.003% or ₹300 / crore on buy side',
    },
];

const currencyData = [
    { label: 'Brokerage', futures: '0.03% or ₹20/executed order whichever is lower', options: '₹20/executed order' },
    { label: 'STT/CTT', futures: 'No STT', options: 'No STT' },
    { label: 'Transaction charges', futures: <><div>NSE: 0.00035%</div><div>BSE: 0.00045%</div></>, options: <><div>NSE: 0.0311%</div><div>BSE: 0.001%</div></> },
    { label: 'GST', futures: '18% on (brokerage + SEBI charges + transaction charges)', options: '18% on (brokerage + SEBI charges + transaction charges)' },
    { label: 'SEBI charges', futures: '₹10 / crore', options: '₹10 / crore' },
    { label: 'Stamp charges', futures: '0.0001% or ₹10 / crore on buy side', options: '0.0001% or ₹10 / crore on buy side' },
];

const commodityData = [
    { label: 'Brokerage', futures: '0.03% or ₹20/executed order whichever is lower', options: '₹20/executed order' },
    { label: 'STT/CTT', futures: '0.01% on sell side (Non-Agri)', options: '0.05% on sell side' },
    { label: 'Transaction charges', futures: <><div>MCX: 0.0021%</div><div>NSE: 0.0001%</div></>, options: <><div>MCX: 0.0418%</div><div>NSE: 0.001%</div></> },
    { label: 'GST', futures: '18% on (brokerage + SEBI charges + transaction charges)', options: '18% on (brokerage + SEBI charges + transaction charges)' },
    { label: 'SEBI charges', futures: <><div>Agri: ₹1 / crore</div><div>Non-agri: ₹10 / crore</div></>, options: '₹10 / crore' },
    { label: 'Stamp charges', futures: '0.002% or ₹200 / crore on buy side', options: '0.003% or ₹300 / crore on buy side' },
];

function EquityTable() {
    return (
        <table className="table table-bordered align-middle">
            <thead className="table-light">
                <tr>
                    <th></th>
                    <th>Equity delivery</th>
                    <th>Equity intraday</th>
                    <th>F&O - Futures</th>
                    <th>F&O - Options</th>
                </tr>
            </thead>
            <tbody>
                {equityData.map((row, i) => (
                    <tr key={i}>
                        <td className="fw-medium text-dark">{row.label}</td>
                        <td className="text-muted">{row.delivery}</td>
                        <td className="text-muted">{row.intraday}</td>
                        <td className="text-muted">{row.futures}</td>
                        <td className="text-muted">{row.options}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function TwoColTable({ data, col1, col2 }) {
    return (
        <table className="table table-bordered align-middle">
            <thead className="table-light">
                <tr>
                    <th></th>
                    <th>{col1}</th>
                    <th>{col2}</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i}>
                        <td className="fw-medium text-dark">{row.label}</td>
                        <td className="text-muted">{row.futures}</td>
                        <td className="text-muted">{row.options}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function Brokerage() {
    const [activeTab, setActiveTab] = useState('equity');

    const tabs = [
        { key: 'equity', label: 'Equity' },
        { key: 'currency', label: 'Currency' },
        { key: 'commodity', label: 'Commodity' },
    ];

    return (
        <div className="container p-3">
            <div className="row p-5">

                {/* Brokerage Tabs Section */}
                <h1 className="fs-2 text-center mb-2">Brokerage</h1>
                <p className="text-muted text-center mb-4">List of all charges and taxes</p>

                <ul className="nav nav-tabs mb-4">
                    {tabs.map((tab) => (
                        <li className="nav-item" key={tab.key}>
                            <button
                                className={`nav-link ${activeTab === tab.key ? 'active' : 'text-muted'}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {activeTab === 'equity' && <EquityTable />}
                {activeTab === 'currency' && <TwoColTable data={currencyData} col1="Currency futures" col2="Currency options" />}
                {activeTab === 'commodity' && <TwoColTable data={commodityData} col1="Commodity futures" col2="Commodity options" />}

                {/* Charges for Account Opening */}
                <h2 className="fs-4 mt-5 mb-3">Charges for account opening</h2>
                <table className="table table-bordered align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Type of account</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-muted">Online account</td>
                            <td><span className="badge bg-success px-3 py-2">FREE</span></td>
                        </tr>
                        <tr>
                            <td className="text-muted">Offline account</td>
                            <td><span className="badge bg-success px-3 py-2">FREE</span></td>
                        </tr>
                        <tr>
                            <td className="text-muted">NRI account (offline only)</td>
                            <td className="text-muted">₹ 500</td>
                        </tr>
                        <tr>
                            <td className="text-muted">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td className="text-muted">₹ 500</td>
                        </tr>
                    </tbody>
                </table>

                {/* Demat AMC */}
                <h2 className="fs-4 mt-5 mb-3">Demat AMC (Annual Maintenance Charge)</h2>
                <table className="table table-bordered align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Value of holdings</th>
                            <th>AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-muted">Up to ₹4 lakh</td>
                            <td><span className="badge bg-success px-3 py-2">FREE</span></td>
                        </tr>
                        <tr>
                            <td className="text-muted">₹4 lakh - ₹10 lakh</td>
                            <td className="text-muted">₹ 100 per year, charged quarterly*</td>
                        </tr>
                        <tr>
                            <td className="text-muted">Above ₹10 lakh</td>
                            <td className="text-muted">₹ 300 per year, charged quarterly</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-muted small">
                    * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).
                    BSDA account holders cannot hold more than one demat account. To learn more about BSDA,{' '}
                    <a href="#" className="text-primary">click here</a>.
                </p>

                {/* Optional Value Added Services */}
                <h2 className="fs-4 mt-5 mb-3">Charges for optional value added services</h2>
                <table className="table table-bordered align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Service</th>
                            <th>Billing Frequency</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-muted">Tickertape</td>
                            <td className="text-muted">Monthly / Annual</td>
                            <td className="text-muted">Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr>
                            <td className="text-muted">Smallcase</td>
                            <td className="text-muted">Per transaction</td>
                            <td className="text-muted">Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td className="text-muted">Kite Connect</td>
                            <td className="text-muted">Monthly</td>
                            <td className="text-muted">Connect: 500 | Personal: Free</td>
                        </tr>
                    </tbody>
                </table>

                {/* Charges Explained */}
                <h2 className="fs-4 mt-5 mb-4">Charges explained</h2>
                <div className="row">
                    <div className="col-6">
                        <h6 className="fw-semibold">Securities/Commodities transaction tax</h6>
                        <p className="text-muted small">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                        <p className="text-muted small">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                        <h6 className="fw-semibold mt-3">Transaction/Turnover Charges</h6>
                        <p className="text-muted small">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                        <p className="text-muted small">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                        <p className="text-muted small">BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                        <p className="text-muted small">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                        <p className="text-muted small">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                        <h6 className="fw-semibold mt-3">Call & trade</h6>
                        <p className="text-muted small">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                        <h6 className="fw-semibold mt-3">Stamp charges</h6>
                        <p className="text-muted small">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                        <h6 className="fw-semibold mt-3">NRI brokerage charges</h6>
                        <ul className="text-muted small">
                            <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                        </ul>

                        <h6 className="fw-semibold mt-3">Account with debit balance</h6>
                        <p className="text-muted small">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>

                        <h6 className="fw-semibold mt-3">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
                        <ul className="text-muted small">
                            <li>Equity and Futures – ₹0.01 per crore + GST of the traded value.</li>
                            <li>Options – ₹0.01 per crore + GST traded value (premium value).</li>
                            <li>Currency – ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        </ul>

                        <h6 className="fw-semibold mt-3">Margin Trading Facility (MTF)</h6>
                        <ul className="text-muted small">
                            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                            <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                            <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                        </ul>
                    </div>

                    <div className="col-6">
                        <h6 className="fw-semibold">GST</h6>
                        <p className="text-muted small">Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)</p>

                        <h6 className="fw-semibold mt-3">SEBI Charges</h6>
                        <p className="text-muted small">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                        <h6 className="fw-semibold mt-3">DP (Depository participant) charges</h6>
                        <p className="text-muted small">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                        <p className="text-muted small">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>
                        <p className="text-muted small">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

                        <h6 className="fw-semibold mt-3">Pledging charges</h6>
                        <p className="text-muted small">₹30 + GST per pledge request per ISIN.</p>

                        <h6 className="fw-semibold mt-3">AMC (Account maintenance charges)</h6>
                        <p className="text-muted small">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href="#" className="text-primary">Click here</a></p>
                        <p className="text-muted small">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="#" className="text-primary">Click here</a></p>

                        <h6 className="fw-semibold mt-3">Corporate action order charges</h6>
                        <p className="text-muted small">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                        <h6 className="fw-semibold mt-3">Off-market transfer charges</h6>
                        <p className="text-muted small">₹25 per transaction.</p>

                        <h6 className="fw-semibold mt-3">Physical CMR request</h6>
                        <p className="text-muted small">First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                        <h6 className="fw-semibold mt-3">Payment gateway charges</h6>
                        <p className="text-muted small">₹9 + GST (Not levied on transfers done via UPI)</p>

                        <h6 className="fw-semibold mt-3">Delayed Payment Charges</h6>
                        <p className="text-muted small">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="#" className="text-primary">Learn more.</a></p>

                        <h6 className="fw-semibold mt-3">Trading using 3-in-1 account with block functionality</h6>
                        <ul className="text-muted small">
                            <li><strong>Delivery & MTF Brokerage:</strong> 0.5% per executed order.</li>
                            <li><strong>Intraday Brokerage:</strong> 0.05% per executed order.</li>
                        </ul>
                    </div>
                </div>

                {/* Disclaimer */}
                <h2 className="fs-4 mt-5 mb-3">Disclaimer</h2>
                <p className="text-muted small">
                    For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
                </p>

            </div>
        </div>
    );
}

export default Brokerage;