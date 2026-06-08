import React from 'react';
import { Navigate } from 'react-router-dom';

// Wraps any route that requires login
// If no token found → redirect to /login
// If token exists → show the actual page

function PrivateRoute({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default PrivateRoute;