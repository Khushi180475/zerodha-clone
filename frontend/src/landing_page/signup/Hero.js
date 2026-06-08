import React, { useState } from 'react';
import axios from 'axios';

function Hero() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            return setError('Passwords do not match');
        }
        if (formData.password.length < 6) {
            return setError('Password must be at least 6 characters');
        }

        setLoading(true);
        try {
            await axios.post('https://zerodha-clone-bozv.onrender.com/api/auth/signup', {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });

            setSuccess('Account created successfully! You can now login.');
            setFormData({ username: '', email: '', password: '', confirmPassword: '' });

        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="row align-items-center g-5 px-5">

                    {/* Left - SVG illustration */}
                    <div className="col-lg-6 d-none d-lg-block text-center">
                        <img
                            src="/media/account_open.svg"
                            alt="Zerodha trading platform"
                            className="img-fluid"
                            style={{ maxHeight: '380px' }}
                        />
                    </div>

                    {/* Right - Signup Form */}
                    <div className="col-lg-6 col-12">
                        <h2 className="fw-semibold mb-1">Signup now</h2>
                        <p className="text-muted mb-4">Open a free demat and trading account</p>

                        {/* Error message */}
                        {error && (
                            <div className="alert alert-danger py-2 small">{error}</div>
                        )}

                        {/* Success message */}
                        {success && (
                            <div className="alert alert-success py-2 small">
                                {success}{' '}
                                <a href="http://localhost:3000/login" className="fw-semibold">
                                    Login here →
                                </a>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            {/* Full Name */}
                            <div className="mb-3">
                                <label className="form-label small fw-medium">Full Name</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="form-label small fw-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-label small fw-medium">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Minimum 6 characters"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-4">
                                <label className="form-label small fw-medium">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    placeholder="Re-enter your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100 py-2 fw-semibold fs-6"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" />
                                        Creating account...
                                    </>
                                ) : (
                                    'Create account'
                                )}
                            </button>
                        </form>

                        <p className="text-muted small mt-3">
                            By proceeding, you agree to the Zerodha{' '}
                            <a href="#terms" className="text-primary text-decoration-none">terms</a>
                            {' '}&amp;{' '}
                            <a href="#privacy" className="text-primary text-decoration-none">privacy policy</a>
                        </p>
                        <p className="text-muted small">
                            Already have an account?{' '}
                            <a href="http://localhost:3000/login" className="text-primary text-decoration-none fw-semibold">
                                Login here
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;