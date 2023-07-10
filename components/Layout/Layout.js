import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

export const Layout = ({ children, className = "" }) => {
    return (
        <main
            className={`main relative overflow-hidden ${
                className && className
            }`}
        >
            <Header />
            {children}
            <Footer />
        </main>
    );
};
