/**

=========================================================
** Helper Functions
=========================================================

**/

import { toast } from "react-hot-toast";

export const parseError = (error) => {
    const message = error instanceof Error ? error.message : String(error);
    return message;
};

export const getFontSizeForHeading = (level) => {
    const FontSizeMap = {
        1: "text-6xl",
        2: "text-5xl",
        3: "text-4xl",
        4: "text-3xl",
        5: "text-2xl",
        6: "text-xl"
    };
    return `${FontSizeMap[level] || ""}`;
};

export const getTextAlign = (textAlign = "left ") => {
    const textAlignMap = {
        left: "align--left",
        right: "align--right",
        center: "align--center"
    };
    return `${textAlignMap[textAlign] || ""}`;
};

export const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    toast.success("Copied content to the clipboard!");
};

export const handleDelete = (
    setRewrittentContent,
    rewrittenContent,
    setGenerating
) => {
    setRewrittentContent("");
    setGenerating(false);
    toast.success("Deleted Content!");
};
