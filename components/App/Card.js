import { Icon } from "@iconify/react";
import Link from "next/link";

export const Card = ({
    title,
    icon = "ph:note-pencil",
    children,
    className,
    href = "/app"
}) => {
    return (
        <Link
            href={href}
            className={`col-span-1 app-card ${className && className}`}
        >
            <div className="p-5 rounded-lg w-full h-full flex flex-wrap content-start gap-4 cursor-pointer bg-white border border-neutral-200 drop-shadow-sm">
                <div className="app-card--icon relative flex align-middle p-2 rounded-lg items-center justify-center bg-secondary-500">
                    <Icon icon={icon} className=" text-white block w-5 h-5" />
                </div>
                <div className="app-card--content text-sm leading-4 text-neutral-500">
                    <h4 className="text-base font-semibold mb-0 text-black">
                        {title}
                    </h4>
                    {children}
                </div>
            </div>
        </Link>
    );
};
