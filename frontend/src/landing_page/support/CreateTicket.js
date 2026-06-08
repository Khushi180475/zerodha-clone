import React, { useState } from "react";

const categories = [
    {
        icon: "fa fa-plus-circle",
        title: "Account Opening",
        links: [
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary",
        ],
    },
    {
        icon: "fa fa-user-circle",
        title: "Your Zerodha Account",
        links: [
            "Your Profile",
            "Account modification",
            "Client Master Report (CMR) and Depository Participant (DP)",
            "Nomination",
            "Transfer and conversion of securities",
        ],
    },
    {
        icon: "fa fa-refresh",
        title: "Kite",
        links: [
            "IPO",
            "Trading FAQs",
            "Margin Trading Facility (MTF) and Margins",
            "Charts and orders",
            "Alerts and Nudges",
            "General",
        ],
    },
    {
        icon: "fa fa-inr",
        title: "Funds",
        links: [
            "Add money",
            "Withdraw money",
            "Add bank accounts",
            "eMandates",
        ],
    },
    {
        icon: "fa fa-at",
        title: "Console",
        links: [
            "Portfolio",
            "Corporate actions",
            "Funds statement",
            "Reports",
            "Profile",
            "Segments",
        ],
    },
    {
        icon: "fa fa-circle-o",
        title: "Coin",
        links: [
            "Mutual funds",
            "National Pension Scheme (NPS)",
            "Fixed Deposit (FD)",
            "Features on Coin",
            "Payments and Orders",
            "General",
        ],
    },
];

const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
    "Learn how to create a ticket",
];

const announcements = [
    "Change in mutual fund settlement cycle due to settlement holiday on account of Annual Bank Closure Day on April 01, 2026",
    "Trading holiday on account of Shri Mahavir Jayanti on March 31, 2026",
];

function CategoryAccordion({ category, isOpen, onToggle }) {
    return (
        <div className="border rounded mb-3">
            <div
                className="d-flex align-items-center justify-content-between px-4 py-3"
                onClick={onToggle}
                style={{ cursor: "pointer" }}
            >
                <div className="d-flex align-items-center gap-3">
                    <i className={`${category.icon} text-primary`} style={{ fontSize: "20px" }}></i>
                    <span className="fw-semibold fs-6">{category.title}</span>
                </div>
                <i className={`fa ${isOpen ? "fa-chevron-up" : "fa-chevron-down"} text-muted`}></i>
            </div>
            {isOpen && (
                <div className="border-top px-4 py-3">
                    <ul className="list-unstyled mb-0">
                        {category.links.map((link, i) => (
                            <li key={i} className="mb-2 d-flex align-items-center gap-2">
                                <span className="text-primary" style={{ fontSize: "8px" }}>●</span>
                                <a href="" className="text-primary" style={{ textDecoration: "none" }}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function CreateTicket() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="container-fluid px-5 py-4">
            <div className="row">
                {/* Left: Accordion Categories */}
                <div className="col-8">
                    {categories.map((cat, i) => (
                        <CategoryAccordion
                            key={i}
                            category={cat}
                            isOpen={openIndex === i}
                            onToggle={() => handleToggle(i)}
                        />
                    ))}
                </div>

                {/* Right: Sidebar */}
                <div className="col-4 ps-4">
                    {/* Announcements */}
                    <div
                        className="p-3 mb-4"
                        style={{ borderLeft: "4px solid orange", backgroundColor: "#fffbf2" }}
                    >
                        <ul className="list-unstyled mb-0">
                            {announcements.map((ann, i) => (
                                <li key={i} className="mb-2">
                                    <a href="" className="text-primary" style={{ textDecoration: "none", fontSize: "14px" }}>
                                        {ann}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="border rounded p-3">
                        <h6 className="fw-semibold mb-3">Quick links</h6>
                        {quickLinks.map((link, i) => (
                            <div key={i} className="py-2 border-bottom">
                                <a href="" className="text-dark" style={{ textDecoration: "none", fontSize: "14px" }}>
                                    {i + 1}. {link}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;