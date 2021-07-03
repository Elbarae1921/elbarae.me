import React from "react";

function SectionTitle({ text, classes }) {
    return <div className={"section-title " + classes}>{text}</div>;
}

export default SectionTitle;
