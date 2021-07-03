import React from "react";

function SectionLayout({ children, classes, id }) {
    return (
        <section className={classes} id={id}>
            <div className="container">
                <div className="row h-100 no-gutters">{children}</div>
            </div>
        </section>
    );
}

export default SectionLayout;
