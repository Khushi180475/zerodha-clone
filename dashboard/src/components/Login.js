import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // Dynamically inject Bootstrap CSS if it hasn't loaded globally
    useEffect(() => {
        const linkId = 'bootstrap-cdn-login';
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
            document.head.appendChild(link);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);

            navigate('/dashboard');

        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid min-vh-100 d-flex flex-column bg-white m-0 p-0" style={{ fontFamily: 'sans-serif' }}>
            
            {/* Header Navbar - Matches the clean layout styling */}
            <header className="d-flex align-items-center justify-content-between py-3 px-4 px-md-5 border-bottom bg-white">
                <div className="ms-md-5">
                    <Link className="navbar-brand" to="http://localhost:3001/">
                        <img
                            src="https://zerodha.com/static/images/logo.svg"
                            style={{ height: "18px" }}
                            alt="Logo"
                            onError={(e) => { e.target.src = "media/logo.svg" }}
                        />
                    </Link>
                </div>
                
            </header>

            {/* Main Content Body Container */}
            <main className="flex-grow-1 d-flex align-items-center justify-content-center px-3 my-5">
                <div className="w-100" style={{ maxWidth: '380px' }}>
                    
                    {/* Synchronized Headline Style with your Signup component ecosystem */}
                    <h1 className="fw-semibold fs-3 text-dark mb-2">
                        Login now
                    </h1>
                    <p className="text-muted mb-4" style={{ fontSize: '15px' }}>
                        Personalized investment dashboard and trading portal
                    </p>

                    {/* Error message boundary block */}
                    {error && (
                        <div className="alert alert-danger py-2 small border-0 bg-danger bg-opacity-10 text-danger mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin}>
                        {/* Email Input */}
                        <div className="mb-3">
                            <label className="form-label text-muted small fw-medium mb-1">Email</label>
                            <input
                                type="email"
                                className="form-control form-control-lg fs-6 py-2"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ borderRadius: '4px', borderColor: '#e0e0e0', boxShadow: 'none' }}
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="form-label text-muted small fw-medium mb-1">Password</label>
                            <input
                                type="password"
                                className="form-control form-control-lg fs-6 py-2"
                                placeholder="Minimum 6 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ borderRadius: '4px', borderColor: '#e0e0e0', boxShadow: 'none' }}
                                required
                            />
                        </div>

                        {/* Modern Primary Blue Action CTA Button element */}
                        <button
                            type="submit"
                            className="btn text-white w-100 py-2 fw-semibold fs-6 mt-2"
                            style={{ backgroundColor: '#0d6efd', borderRadius: '4px', transition: 'background 0.2s' }}
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Log in to account'}
                        </button>
                    </form>

                    <p className="text-muted small mt-4">
                        Don't have an account?{' '}
                        <Link to="http://localhost:3001/signup" className="text-decoration-none fw-medium" style={{ color: '#0d6efd' }}>Sign up here</Link>
                    </p>

                    

                </div>
            </main>
        </div>
    );
}

export default Login;