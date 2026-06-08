import React from 'react';

const steps = [
    { number: '01', label: 'Enter the requested details' },
    { number: '02', label: 'Complete e-sign & verification' },
    { number: '03', label: 'Start investing!' },
];

function Steps() {
    return (
        <section className="py-5" style={{ background: '#f9f9f9', lineHeight: "1.8", fontSize: "1.2em" }}>
            <div className="container">

                <h2 className="text-center fw-semibold mb-5">
                    Steps to open a demat account with Zerodha
                </h2>

                <div className="row align-items-center g-5 justify-content-center">

                    {/* Left - Real SVG illustration */}
                    <div className="col-lg-5 d-none d-lg-flex justify-content-center">
                        <img
                            src="/media/steps-acop.svg"
                            alt="Steps to open account"
                            className="img-fluid"
                            style={{ maxWidth: '373px' }}
                        />
                    </div>

                    {/* Right - Steps list */}
                    <div className="col-lg-5 col-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`d-flex align-items-center gap-4 py-3 ${index < steps.length - 1 ? 'border-bottom' : ''}`}
                            >
                                <span
                                    className="text-muted fw-light fs-5"
                                    style={{ minWidth: '28px' }}
                                >
                                    {step.number}
                                </span>
                                <span className="fw-medium">{step.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Steps;