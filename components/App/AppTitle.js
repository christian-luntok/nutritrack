export const AppTitle = ({ title, children }) => {
    return (
        <div className="app-title--container text-neutral-500">
            <h2 className="mb-0 text-2xl font-semibold text-black">{title}</h2>
            {children}
        </div>
    );
};
