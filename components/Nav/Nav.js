import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const navigation = [
    { name: "Features", to: "#features", href: "/#features" },
    { name: "Testimonials", to: "#testimonials", href: "/#testimonials" },
    { name: "FAQ?", to: "#faq", href: "/#faq" },
    {
        name: "Contact",
        href: "https://chrstnl.com/",
        isArrow: true,
        target: "_blank"
    }
];

export const Nav = () => {
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const closeNav = () => {
        setIsNavOpen(false);
    };
    return (
        <nav className="header-nav">
            <div className="header-nav--container">
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="mobile-menu"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <Icon
                        icon="material-symbols:menu-rounded"
                        className="h-6 w-auto text-black"
                    />
                </button>
                <div
                    className={`header-nav--menu-container z-20 ${
                        isNavOpen ? "show" : "hide"
                    }`}
                    id="navbar-default"
                >
                    <ul className="header-nav--menu">
                        {navigation.map((item) => (
                            <li
                                key={item.name}
                                className="header-nav--menu-item"
                            >
                                <a
                                    key={item.name}
                                    to={item.to}
                                    href={item.href}
                                    className={`menu-item--link flex items-center
                    ${router.pathname === item.href ? "active" : ""}
                  `}
                                    onClick={closeNav}
                                    target={item.target ? item.target : "_self"}
                                >
                                    {item.name}
                                    {item.isArrow && (
                                        <span className="ml-2 inline-block text-sm font-medium text-inherit">
                                            <Icon
                                                icon="material-symbols:arrow-outward"
                                                className="h-6 w-auto"
                                            />
                                        </span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
