// footer.tsx
import Link from "next/link";
import Image from "next/image";

type SocialLink = {
    platform: string;
    url: string;
    icon: string; // path in /public
};

const socialLinks: SocialLink[] = [
    { platform: "Twitter", url: "https://twitter.com/kuchezagaming", icon: "/icons/twitter.svg" },
    { platform: "Instagram", url: "https://instagram.com/kuchezagaming", icon: "/icons/instagram.svg" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/kuchezagaming", icon: "/icons/linkedin.svg" },
    { platform: "discord", url: "#", icon: "/icons/discord.svg"},
    { platform: "youtube", url: "#", icon: "/icons/youtube.svg"}
];

const legalLinks = [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-white text-black border-t border-neutral-100">
            {/* Structural Container: Centers and handles page limits cleanly with no layout layout shifting */}
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 py-10 md:py-16">
                <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start md:gap-5">

                    <div className="w-[min(100%,350px)]">
                        <Link href="/">
                            <span className="sr-only">Logo</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6"
                                viewBox="0 0 258.896 33.456"
                            >
                                <g transform="translate(5723.321 -3637.23)" fill="#000">
                                    <path d="M-5467.858,3652.727v2.463h7.333v15.5h-27.592l-5.863-5.863v-21.729l5.863-5.864h27.592v15.5Z" transform="translate(-154.195 0)" />
                                    <path d="M-5345.844,3637.23v33.456h-15.491v-7.333h-2.468v7.333h-15.491V3637.23h15.491v7.333h2.468v-7.333Z" transform="translate(-231.303 0)" />
                                    <path d="M-5238.508,3647.026v2.463h7.339v8.933h-7.339v2.462h7.339v9.8h-33.456V3637.23h33.456v9.8Z" transform="translate(-308.401 0)" />
                                    <path d="M-5116.5,3653.953l-11.379,6.932h11.379v9.8h-33.456v-16.728l11.375-6.932h-11.375v-9.8h33.456Z" transform="translate(-385.498 0)" />
                                    <path d="M-5035.285,3637.23v33.456h15.5v-7.333h2.462v7.333h15.5V3637.23Zm17.959,20.395h-2.462v-7.333h2.462Z" transform="translate(-462.595)" />
                                    <path d="M-5689.865,3649.722l-4.23,4.236,4.23,4.236v12.491h-15.5v-7.333h-2.462v7.333h-15.5V3637.23h15.5v7.333h2.462v-7.333h15.5Z" transform="translate(0 0)" />
                                    <path d="M-5575.2,3637.23v27.592l-5.858,5.863h-21.734l-5.863-5.863V3637.23h15.5v7.333h2.462v-7.333Z" transform="translate(-77.097 0)" />
                                </g>
                            </svg>
                        </Link>

                        <p className="mb-7 mt-6 font-light text-neutral-600">
                            Serious About Play
                        </p>

                        <div className="text-sm text-neutral-500">
                            Copyright © {year} Kucheza.
                            {legalLinks.map((link) => (
                                <Link key={link.label} className="ml-2 hover:underline hover:text-black transition-colors" href={link.href}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row items-start justify-between gap-10 md:gap-28">
                        <div>
                            <div className="mb-4 text-base font-bold text-neutral-900">Social</div>
                            <ul className="flex items-center space-x-4">
                                {socialLinks.map((link) => (
                                    <li key={link.platform}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="block p-1">
                                            <span className="sr-only">{link.platform}</span>
                                            <Image
                                                src={link.icon}
                                                alt={link.platform}
                                                width={20}
                                                height={20}
                                                className="size-5 opacity-70 transition-opacity hover:opacity-100"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
