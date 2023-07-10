import React from "react";
import { getFontSizeForHeading, getTextAlign } from "@utils/helper";

export const Title = ({ textAlign, content, level }) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: { __html: content },
        className: `max-w-5xl mx-auto my-5 text-5xl ${getFontSizeForHeading(
            level
        )} ${getTextAlign(textAlign)}`
    });

    return tag;
};
