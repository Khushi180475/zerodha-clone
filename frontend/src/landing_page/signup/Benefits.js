import React from 'react';

const benefits = [
    {
        title: 'Unbeatable pricing',
        description:
            'Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.',
    },
    {
        title: 'Best investing experience',
        description:
            'Simple and intuitive trading platform with an easy-to-understand user interface.',
    },
    {
        title: 'No spam or gimmicks',
        description:
            'Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.',
    },
    {
        title: 'The Zerodha universe',
        description:
            'More than just an app — gain free access to the entire ecosystem of our partner products.',
    },
];

function Benefits() {
    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="row align-items-center g-5 justify-content-center">

                    {/* Left - Real SVG illustration */}
                    <div className="col-lg-5 d-none d-lg-flex flex-column align-items-center">
                        <img
                            src="/media/acop-benefits.svg"
                            alt="Benefits of Zerodha demat account"
                            className="img-fluid mb-3"
                            style={{ maxWidth: '400px' }}
                        />
                        <p className="text-muted fw-semibold text-center" style={{ maxWidth: '600px' }}>
                            Benefits of opening a Zerodha demat account
                        </p>
                    </div>

                    {/* Right - Benefits list */}
                    <div className="col-lg-5 col-12">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="mb-4">
                                <h6 className="fw-semibold mb-1">{benefit.title}</h6>
                                <p className="text-muted small mb-0">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Benefits;