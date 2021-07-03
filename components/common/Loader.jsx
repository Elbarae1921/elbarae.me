import React from "react";

function Loader({ classes }) {
    return (
        <div className={"work-loader position-absolute d-flex h-100 w-100 " + (classes ? classes : "")}>
            <div className="spinner-border text-dark m-auto" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
}

export default Loader;
