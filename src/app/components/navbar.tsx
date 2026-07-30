"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Plus, ArrowRight, X } from "lucide-react";
import { useContactDialog } from "../contact/contact-dialog";

const navLinks = [
  { title: "About Us", href: "/about-us" },
  {
    title: "Services",
    children: [
      { title: "Game Art Co-Dev", href: "/services/game-art-co-dev" },
      { title: "Unreal Engine Training", href: "/services/unreal-engine-training" },
    ],
  },
  { title: "Our Games", href: "/our-games" },
  {
    title: "Games in Education",
    children: [
      { title: "Playful Computing", href: "/games-in-education/playful-computing" },
      { title: "Esports", href: "/games-in-education/esports" },
    ],
  },
];

type NavChildLink = { title: string; href: string };
type NavLinkItem = {
  title: string;
  href?: string;
  children?: NavChildLink[];
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open: openContact } = useContactDialog();

  const isLinkActive = (href: string) =>
    pathname === href || pathname === `${href}/`;

  function handleContactClick() {
    setMobileOpen(false);
    openContact();
  }

  return (
    <>
      {/* Outer section centered and pinned to the top */}
      <header className="fixed inset-x-0 top-6 z-30 flex justify-center px-4 sm:px-6 md:px-8">
        {/* Dynamic bounding wrapper mimicking max-w-8xl spacing */}
        <div className="w-full max-w-7xl">
          {/* Main Capsule Container */}
          <div className="rounded-full bg-white/40 shadow-sm backdrop-blur-[30px] px-4 py-3 sm:px-6 md:py-4">
            <div className="flex items-center justify-between gap-4">

              {/* LEFT: Logo Anchor */}
              <Link href="/" className="flex items-center pl-2">
                <span className="sr-only">Logo</span>
                <img
                  src="/logo/kucheza-logo.svg"
                  alt="Kucheza"
                  className="h-5 w-auto sm:h-6 object-contain"
                />
              </Link>

              {/* CENTER: Navigation Links */}
              <nav className="hidden lg:block">
                <ul className="flex flex-row items-center gap-x-8 xl:gap-x-12 font-medium text-[15px] text-[#111111]">
                  {navLinks.map((link) => (
                    <NavItem key={link.title} link={link} isLinkActive={isLinkActive} />
                  ))}
                </ul>
              </nav>

              {/* RIGHT: Primary Action Button */}
              <div className="hidden lg:block pr-1">
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#111111] px-6 text-sm font-semibold text-white transition-all hover:translate-x-5"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="size-4 flex-shrink-0" />
                </button>
              </div>

              {/* Mobile Control Anchor */}
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileOpen((v) => !v)}
                  className="flex size-10 items-center justify-center rounded-full bg-[#111111] text-white"
                >
                  <span className="sr-only">Toggle menu</span>
                  {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Layer */}
      <div className="pointer-events-none fixed right-0 top-0 z-20 h-screen w-full overflow-hidden lg:hidden">
        <div className="relative size-full">
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ x: "150%" }}
                animate={{ x: 0 }}
                exit={{ x: "150%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="pointer-events-auto absolute right-6 top-[100px] w-[240px] rounded-[30px] bg-white/95 p-6 shadow-xl backdrop-blur-md"
              >
                <nav>
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <MobileNavItem key={link.title} link={link} />
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={handleContactClick}
                    className="mt-6 flex w-full h-11 items-center justify-center gap-2 rounded-full bg-[#111111] px-6 text-sm font-semibold text-white"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="size-4 flex-shrink-0" />
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function NavItem({
  link,
  isLinkActive,
}: {
  link: NavLinkItem;
  isLinkActive: (href: string) => boolean;
}) {
  const [open, setOpen] = useState(false);

  if (!link.children) {
    const active = link.href ? isLinkActive(link.href) : false;
    return (
      <li className="whitespace-nowrap">
        <Link
          href={link.href ?? "#"}
          className={`relative inline-block pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 ${active ? "after:scale-x-100" : ""
            }`}
        >
          {link.title}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative whitespace-nowrap"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative inline-flex items-center gap-1 pb-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
        aria-expanded={open}
      >
        <span>{link.title}</span>
        <Plus className="size-3.5 opacity-60" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 z-10 mt-3 w-48 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-xl border border-neutral-100"
          >
            <div className="flex flex-col gap-1">
              {link.children.map((child) => (
                <Link
                  key={child.title}
                  href={child.href}
                  className="group block rounded-xl px-4 py-2.5 text-sm font-normal text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-black"
                >
                  <span className="relative inline-block pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    {child.title}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function MobileNavItem({ link }: { link: NavLinkItem }) {
  const [open, setOpen] = useState(false);

  if (!link.children) {
    return (
      <li>
        <Link href={link.href ?? "#"} className="block py-1 text-[15px] font-medium text-neutral-800">
          {link.title}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div className="relative block">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex w-full items-center justify-between py-1 text-[15px] font-medium text-neutral-800"
          aria-expanded={open}
        >
          <span>{link.title}</span>
          <Plus className="size-4 opacity-60" />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-3 pl-3 pt-2 pb-1 border-l border-neutral-100 mt-1">
                {link.children.map((child) => (
                  <Link key={child.title} href={child.href} className="block text-sm text-neutral-600">
                    {child.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}