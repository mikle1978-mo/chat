import React from "react";

const HighlightedText = ({ text }) => {
    if (typeof text !== "string") {
        return null;
    }

    const regex = /(@\w+)/g;

    if (!regex.test(text)) {
        return <span>{text}</span>;
    }

    const parts = text.split(regex);

    return (
        <span>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <span
                        key={index}
                        style={{
                            color: "var(--secondary-5)",
                            fontWeight: "400",
                        }}
                    >
                        {part}
                    </span>
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </span>
    );
};

export default HighlightedText;
