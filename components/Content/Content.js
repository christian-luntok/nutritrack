import { getTextAlign } from "@utils/helper";

export const Content = ({ className = "", alignment, children }) => {
    const alignClass = getTextAlign(alignment);
    return (
        <div
            className={`content text-xl max-w-3xl text-black/60 ${
                className && className
            } ${alignClass && alignClass}`}
        >
            {children}
        </div>
    );
};
