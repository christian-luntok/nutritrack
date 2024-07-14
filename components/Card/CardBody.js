export const CardBody = ({ children, className }) => {
    return (
        <div className={`card--body ${className && className}`}>{children}</div>
    );
};
