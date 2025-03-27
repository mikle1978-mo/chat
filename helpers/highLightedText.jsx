import React from "react";

const HighlightedText = ({ text }) => {
    if (typeof text !== "string") {
        return null;
    }

    const regex = /(@\w+)/g;

    if (!regex.test(text)) {
        return text; // Если нет совпадений, просто возвращаем строку
    }

    const parts = text.split(regex);

    return parts.map((part, index) =>
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
            part
        )
    );
};

export default HighlightedText;
