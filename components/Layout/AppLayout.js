import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

const navigation = [
    { name: "Home", href: "/app", icon: "ph:house" },
    { name: "General AI Help", href: "/app/general", icon: "ph:note-pencil" },
    { name: "Blog Posts", href: "/app/articles", icon: "ph:file-text" },
    { name: "Ads and Socials", href: "/app/advertising", icon: "ph:browsers" },
    {
        name: "Website Content",
        href: "/app/site-content",
        icon: "ph:chat-centered-text"
    }
];

export const AppLayout = ({ children }) => {
    const router = useRouter();
    const { user } = useUser();

    return (
        <main className="h-100 flex bg-neutral-50">
            <div className="sidebar--container">
                <div className="sidebar max-w-[256px] w-64 ">
                    <div className="border border-r border-neutral-200 w-64 bg-white max-w-[256px] top-0 h-full flex outline-none z-50 fixed overflow-y-auto flex-col left-0 right-auto ">
                        <div className="logo--container flex items-center flex-row gap-2 w-full">
                            <div className="logo min-h-[64px] flex px-4 items-center justify-center w-full">
                                <Link href="/app">
                                    <Image
                                        src="/articoole-colored.svg"
                                        alt="logo"
                                        className="h-6 inline-block align-middle w-auto"
                                        height="25"
                                        width="100"
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="sidebar--content h-full w-full flex flex-wrap box-border justify-between flex-col">
                            <div className="app-nav px-4 w-full text-left">
                                <ul className="app-nav--container list-none relative mt-2 flex flex-col gap-2">
                                    {navigation.map((item) => (
                                        <li
                                            key={item.name}
                                            className="app-nav--item"
                                        >
                                            <Link
                                                href={item.href}
                                                className={`rounded-lg text-sm h-10 w-full text-neutral-700 font-medium flex relative text-left items-center py-2 justify-center transition hover:bg-neutral-200 ${
                                                    router.pathname ===
                                                    item.href
                                                        ? "active bg-neutral-200"
                                                        : ""
                                                }`}
                                            >
                                                <div className="app-nav--icon inline-flex justify-center text-neutral-700 min-w-[40px] flex-shrink-0 cursor-pointer">
                                                    <Icon
                                                        icon={item.icon}
                                                        className="inline-block align-middle h-5 w-5"
                                                    />
                                                </div>
                                                <div className="app-nav--label my-2 min-w-0 flex-auto">
                                                    {item.name}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar--settings w-full mt-auto text-center">
                            <ul className="sidebar--setting px-4 text-left">
                                <li className="setting--item">
                                    <Link
                                        href="/settings/pricing"
                                        className="rounded-lg h-10 w-full text-neutral-700 font-medium flex relative text-left items-center py-2 justify-center transition hover:bg-neutral-100"
                                    >
                                        <div className="app-nav--icon inline-flex justify-center text-neutral-700 min-w-[40px] flex-shrink-0 cursor-pointer">
                                            <Icon
                                                icon="ph:coins"
                                                className="inline-block align-middle h-5 w-5 text-secondary-200"
                                            />
                                        </div>
                                        <div className="app-nav--label my-2 min-w-0 flex-auto">
                                            <span className="font-bold mr-1">
                                                10
                                            </span>
                                            <span className="text-sm">
                                                Credit(s)
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="setting--item">
                                    <Link
                                        href="/settings/pricing"
                                        className="rounded-lg h-10 w-full text-sm text-neutral-700 font-medium flex relative text-left items-center py-2 justify-center transition hover:bg-neutral-100"
                                    >
                                        <div className="app-nav--icon inline-flex justify-center text-neutral-700 min-w-[40px] flex-shrink-0 cursor-pointer">
                                            <Icon
                                                icon="ph:gear"
                                                className="inline-block align-middle h-5 w-5"
                                            />
                                        </div>
                                        <div className="app-nav--label my-2 min-w-0 flex-auto">
                                            Settings
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="divider my-2 mx-4 border border-t border-neutral-200"></div>
                        <div className="profile--settings m-4">
                            <Link
                                href="/app"
                                className="rounded-lg overflow-hidden text-sm h-10 w-full text-neutral-700 font-medium flex relative text-left items-center py-2 justify-center transition hover:bg-neutral-200"
                            >
                                <div className="profile--icon inline-flex justify-center text-neutral-700 min-w-[40px] flex-shrink-0 cursor-pointer">
                                    {user && (
                                        <Image
                                            src={user.picture}
                                            alt={user.name}
                                            height={32}
                                            width={32}
                                            className="rounded-full inline-block align-middle h-8 w-8 p-1"
                                        />
                                    )}
                                </div>
                                <div className="profile--name my-2 min-w-0 flex-auto">
                                    {user && (
                                        <div className="profile--email">
                                            <div className="font-bold">
                                                {user.email}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar Container */}
            <div className="content--container w-full flex-grow min-w-0">
                <div className="wrap-px w-full mx-auto h-full min-h-screen">
                    <div className="grid p-8 gap-6">{children}</div>
                </div>
            </div>
            {/* Content Container */}
        </main>
    );
};
