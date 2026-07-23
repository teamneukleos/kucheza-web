"use client";

export default function Outro() {
    return (
        <section
            className="relative min-h-[520px] overflow-hidden py-24 md:min-h-[640px] md:py-32"
            style={{
                background: "linear-gradient(127.19deg, #52D7FF 0%, #41F7CD 70%)",
            }}
        >
            {/* Background line pattern, subtle sway — same as Testimonials */}
            <div
                className="pointer-events-none absolute left-0 top-0 h-full w-full animate-[sway_8s_ease-in-out_infinite] bg-cover bg-center opacity-60"
                style={{ backgroundImage: "url(/images/upline.svg)" }}
            />

            {/* Structural Container: Centers and applies identical layout constraints across sections */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
                <h2 className="mb-4 text-sm font-semibold tracking-wide text-black/90">
                    SUNDAY SCHOOL&apos;D
                </h2>

                <div className="max-w-3xl space-y-6 text-xl font-light leading-relaxed text-black sm:text-2xl">
                    <p>
                        Every great game begins with an idea, and ours began with a
                        simple question: What if learning the Bible could be as
                        exciting as playing your favourite game? That question has
                        guided every step of our journey.
                    </p>
                    <p>
                        Thank you for believing in what we&apos;re building. We can&apos;t
                        wait to welcome you into the experience and share it with you
                        soon.
                    </p>
                </div>

                {/* Store badges */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a href="#" aria-label="View on Steam" className="transition-opacity hover:opacity-80">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/icons/steam-badge.svg" alt="Steam" className="h-10 w-auto sm:h-12" />
                    </a>
                    <a href="#" aria-label="Get it on Google Play" className="transition-opacity hover:opacity-80">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/icons/google-play-badge.svg" alt="Google Play" className="h-10 w-auto sm:h-12" />
                    </a>
                    <a href="#" aria-label="Download on the App Store" className="transition-opacity hover:opacity-80">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/icons/app-store-badge.svg" alt="App Store" className="h-10 w-auto sm:h-12" />
                    </a>
                </div>
            </div>
        </section>
    );
}
