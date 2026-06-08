import React from 'react';
import Hero from './Hero';
import Investment from './Investment';
import Steps from './Steps';
import Benefits from './Benefits';
import AccTypes from './AccTypes';
import Faqs from './Faqs';
import OpenAccount from '../OpenAccount';

function Signup() {
    return (
        <div>
            {/* Page heading */}
            <div className="text-center pt-5 pb-2 bg-white">
                <h1 className="fw-semibold fs-3">
                    Open a free demat and trading account online
                </h1>
                <p className="text-muted">
                    Start investing brokerage free and join a community of 1.6+ crore investors and traders
                </p>
            </div>

            <Hero />
            <Investment />
            <Steps />
            <Benefits />
            <AccTypes />
            <Faqs />
            <OpenAccount />
        </div>
    );
}

export default Signup;