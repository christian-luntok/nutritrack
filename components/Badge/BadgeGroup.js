import Link from "next/link";
import { SectionContainer } from "@components/Section/";
import { getTextAlign } from "@utils/helper";

export const BadgeGroup = ({ alignment, link, children, className }) => {
    const Element = link ? Link : "div";
    const href =
        typeof link === "string" ? link : link?.href != null ? link.href : "";
    const alignClass = getTextAlign(alignment);

    return (
        <SectionContainer className="badge-group w-full">
            <Element
                href={href}
                className={`badge-group--container ${
                    link ? "badge-group--link" : ""
                } ${alignClass ? alignClass : ""} ${className && className}`}
            >
                {children}
            </Element>
        </SectionContainer>
    );
};
