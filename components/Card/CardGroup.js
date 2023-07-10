import { SectionContainer } from "@components/Section";

export const CardGroup = ({ children, className = "" }) => {
    return (
        <SectionContainer className="card-group">
            <div className={`card-group--container ${className && className}`}>
                {children}
            </div>
        </SectionContainer>
    );
};
