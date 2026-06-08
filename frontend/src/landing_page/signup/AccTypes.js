import React from 'react';

const accountTypes = [
    {
        icon: '👤',
        title: 'Individual Account',
        description: 'Invest in equity, mutual funds and derivatives',
    },
    {
        icon: '👥',
        title: 'HUF Account',
        description: 'Make tax-efficient investments for your family',
    },
    {
        icon: '🌐',
        title: 'NRI Account',
        description: 'Invest in equity, mutual funds, debentures, and more',
    },
    {
        icon: '👶',
        title: 'Minor Account',
        description: 'Teach your little ones about money & invest for their future with them',
    },
    {
        icon: '🏢',
        title: 'Corporate / LLP / Partnership',
        description: 'Manage your business surplus and investments easily',
    },
];

function AccTypes() {
    return (
        <section className="py-5" style={{ background: '#f9f9f9', lineHeight: "1.8", fontSize: "1.2em" }} >
            <div className="container">

                <h2 className="text-center fw-semibold mb-5">
                    Explore different account types
                </h2>

                <div className="row g-3 justify-content-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {accountTypes.map((acc, index) => (
                        <div key={index} className="col-md-4 col-sm-6">
                            <div className="card h-100 border p-3">
                                <div className="card-body p-0">
                                    <div className="fs-4 text-primary mb-3">{acc.icon}</div>
                                    <h6 className="fw-semibold mb-2">{acc.title}</h6>
                                    <p className="text-muted small mb-0">{acc.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default AccTypes;