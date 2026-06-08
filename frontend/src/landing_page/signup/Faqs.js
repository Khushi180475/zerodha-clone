import React, { useState } from 'react';

const faqData = [
    {
        question: 'What is a Zerodha account?',
        answer:
            'A Zerodha account is a combined trading and demat account that lets you invest in stocks, mutual funds, IPOs, F&O, and more. It is free to open and comes with access to all Zerodha platforms like Kite, Console, and Coin.',
    },
    {
        question: 'What documents are required to open a demat account?',
        answer:
            'You need your PAN card, Aadhaar card (for e-KYC), a bank account, a cancelled cheque or bank statement, and a signature. The entire process is paperless and can be completed online.',
    },
    {
        question: 'Is Zerodha account opening free?',
        answer:
            'Yes, opening a Zerodha account is completely free. There are no account opening charges for individual demat and trading accounts.',
    },
    {
        question: 'Are there any AMC (Account Maintenance Charges) for a demat account?',
        answer:
            'Zerodha charges ₹300/year as AMC for demat accounts. This is billed quarterly at ₹75 per quarter. There is no AMC for the first year.',
    },
    {
        question: 'Can I open a demat account without a bank account?',
        answer:
            'No, a bank account is mandatory to open a demat account in India. It is required for fund transfers and receiving dividends or sale proceeds.',
    },
    {
        question: 'What is a Basic Services Demat Account (BSDA)?',
        answer:
            'A BSDA is a demat account with reduced charges, offered to individuals with holdings up to ₹2 lakh. If your holding value is below ₹50,000, there are no maintenance charges.',
    },
    {
        question: 'Can I open a demat and trading account using the mobile app?',
        answer:
            'Yes, you can open a Zerodha account using the mobile app. The entire process including Aadhaar e-KYC and e-sign can be completed on your smartphone.',
    },
];

function Faqs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-5 bg-white">
            <div className="container" style={{ maxWidth: '860px' }}>

                <h2 className="fw-semibold mb-4">FAQs</h2>

                <div className="accordion" id="faqAccordion">
                    {faqData.map((faq, index) => (
                        <div key={index} className="accordion-item border-0 border-bottom">

                            {/* Blue accent bar */}
                            <div style={{ height: '3px', width: '40px', background: '#387ed1' }}></div>

                            <h2 className="accordion-header">
                                <button
                                    className={`accordion-button bg-white text-dark shadow-none px-0 ${openIndex !== index ? 'collapsed' : ''}`}
                                    type="button"
                                    onClick={() => toggle(index)}
                                    style={{ fontWeight: '400', fontSize: '15px' }}
                                >
                                    {faq.question}
                                </button>
                            </h2>

                            <div className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}>
                                <div className="accordion-body px-0 pt-0 pb-3 text-muted small">
                                    {faq.answer}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Faqs;