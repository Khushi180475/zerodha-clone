import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <Router>
            <Routes>
                {/* Auth Route */}
                <Route path="/login" element={<Login />} />

                {/* Secure Workspace Route Tree */}
                <Route
                    path="/dashboard/*"
                    element = {
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                {/* Explicitly catch standard slash boundaries and fallback to secure entry */}
                <Route path="/dashboard" element={<Navigate to="/dashboard/" replace />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
}

export default App;