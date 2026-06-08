import React from 'react';

const investments = [
    {
        title: 'Stocks',
        description: 'Invest in all exchange-listed securities',
        img: '/media/stocks-acop.svg',
        alt: 'Stocks',
    },
    {
        title: 'Mutual funds',
        description: 'Invest in commission-free direct mutual funds',
        img: '/media/mf-acop.svg',
        alt: 'Mutual funds',
    },
    {
        title: 'IPO',
        description: 'Apply to the latest IPOs instantly via UPI',
        img: '/media/ipo-acop.svg',
        alt: 'IPO',
    },
    {
        title: 'Futures & options',
        description: 'Hedge and mitigate market risk through simplified F&O trading',
        img: '/media/fo-acop.svg',
        alt: 'Futures and options',
    },
];

function Investment() {
    return (
        <section className="py-5  bg-white" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
            <div className="container">

                <h2 className="text-center fw-semibold mb-5">
                    Investment options with Zerodha demat account
                </h2>

                <div className="row g-4 justify-content-center px-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {investments.map((item, index) => (
                        <div key={index} className="col-md-6">
                            <div className="d-flex align-items-center gap-3">
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    style={{ width: '110px', height: '84px', objectFit: 'contain', flexShrink: 0 }}
                                />
                                <div>
                                    <h6 className="fw-semibold mb-1">{item.title}</h6>
                                    <p className="text-muted small mb-0">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <button className="btn btn-primary px-4 py-2 fw-semibold">
                        Explore Investments
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Investment;