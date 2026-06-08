import React from 'react';
function Hero() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media\homeHero.png'  style={{width:"70%", margin: "0 auto"}} alt="Hero Image" className='mb-5'/>
                <h1 className='mt-3 fs-3 mb-3'  >Invest in everything</h1>
                <p className='fs-5 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"17%", margin: "0 auto"}}>Sign up for free </button>
            </div>  
        </div>
        
    );
        
}
export default Hero;