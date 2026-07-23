"use client";

import {
    createContext,
    useContext,
    useState,
    useRef,
    useEffect,
    ReactNode,
} from "react";
import { X } from "lucide-react";

type ContactDialogContextType = {
    open: () => void;
    close: () => void;
};

const ContactDialogContext = createContext<ContactDialogContextType | null>(null);

export function useContactDialog() {
    const ctx = useContext(ContactDialogContext);
    if (!ctx) {
        throw new Error("useContactDialog must be used within ContactDialogProvider");
    }
    return ctx;
}

export function ContactDialogProvider({ children }: { children: ReactNode }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    return (
        <ContactDialogContext.Provider value={{ open, close }}>
            {children}

            <dialog
                ref={dialogRef}
                id="contact-dialog"
                onClose={() => setIsOpen(false)}
                className="fixed inset-0 m-auto max-h-[90vh] w-[min(100%,880px)] overflow-auto rounded-[30px] bg-white p-6 text-black backdrop:bg-black/60"
            >
                <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-black/60 transition-colors hover:bg-black/5 hover:text-black"
                >
                    <X className="size-5" />
                </button>

                <h2 className="mb-7 text-2xl font-medium">Contact</h2>

                <div className="grid gap-10 md:grid-cols-[1fr_0.8fr]">
                    <form id="contact-form">
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="James Bond"
                                    className="rounded-md border border-black/20 px-3 py-2 text-base outline-none focus:border-black/50"
                                />
                            </div>

                            <div className="grid gap-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="james.bond@gmail.com"
                                    className="rounded-md border border-black/20 px-3 py-2 text-base outline-none focus:border-black/50"
                                />
                            </div>

                            <div className="grid gap-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Project Description
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Feel free to paste links to Google / Dropbox"
                                    className="resize-none rounded-md border border-black/20 px-3 py-2 text-base outline-none focus:border-black/50"
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    className="h-4 w-4 rounded border-black/30"
                                />
                                <label htmlFor="terms" className="text-sm">
                                    I agree with{" "}
                                    <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                                        processing of my personal data
                                    </a>
                                </label>
                            </div>

                            <div className="grid gap-1">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center rounded-full bg-[#24F2BE] px-6 py-3 text-base font-semibold text-black transition-opacity hover:opacity-90"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="hidden md:block">
                        <div className="grid gap-8">
                            <div>
                                <h3 className="mb-2 font-medium">Have a project in mind?</h3>
                                <a href="mailto:projects@kuchezagaming.com" className="text-lg font-semibold">
                                    projects@kuchezagaming.com
                                </a>
                            </div>

                            <div>
                                <h3 className="mb-2 font-medium">How we work</h3>
                                <ul className="text-base font-light text-black/70">
                                    <li>Estimation Process</li>
                                    <li>Workflow and Best Practices</li>
                                    <li>2D Brief Sample</li>
                                    <li>3D Art Checklist</li>
                                    <li>Terms of Work</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </ContactDialogContext.Provider>
    );
}