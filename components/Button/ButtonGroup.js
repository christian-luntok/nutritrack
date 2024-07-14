import { getTextAlign } from "@utils/helper";
import { SectionContainer } from "@components/Section";

export const ButtonGroup = ({ className = "", alignment, children }) => {
    const alignClass = getTextAlign(alignment);
    return (
        <SectionContainer className="btn-group">
            <div
                className={`btn-group--container ${className && className} ${
                    alignClass && alignClass
                }`}
            >
                {children}
            </div>
        </SectionContainer>
    );
};
