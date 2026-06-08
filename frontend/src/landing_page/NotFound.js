import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mb-5 mt-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-3 mb-3 text-muted"> 404 - Page Not Found</h1>
        <p className="text-muted">
            The page you are looking for does not exist. Please check the URL and
            try again.
        </p>
      </div>
    </div>
  );
}

export default NotFound;