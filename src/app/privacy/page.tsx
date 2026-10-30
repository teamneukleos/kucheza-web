import Link from "next/link";

const sections = [
  { id: "information-we-collect", title: "1. Information We Collect" },
  {
    id: "third-party-services",
    title: "2. Third-Party Services & Integrations",
  },
  {
    id: "in-app-purchases",
    title: "3. Monetization & In-App Purchases",
  },
  {
    id: "childrens-privacy",
    title: "4. Children's Privacy & School Educational Programs",
  },
  {
    id: "how-we-use-information",
    title: "5. How We Use Your Information",
  },
  { id: "your-rights", title: "6. Your Rights & Data Choices" },
  { id: "data-security", title: "7. Data Transfers & Security" },
  { id: "policy-changes", title: "8. Changes to This Policy" },
  { id: "contact-us", title: "9. Contact Us" },
];

const sectionClass = "scroll-mt-28 border-b border-gray-200 py-8 last:border-b-0";

const headingClass = "mb-4 text-xl font-bold text-black md:text-2xl";

const subheadingClass = "mb-2 mt-6 text-lg font-bold text-black";

const paragraphClass = "mb-4 text-base leading-7 text-black";

const listClass = "mb-5 list-disc space-y-3 pl-6 text-base leading-7 text-black";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Page Header */}
        <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden bg-[#EDEDED] py-20 md:min-h-[90vh] md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
            <span className="inline-block rounded-md bg-[#24F2BE] px-5 py-2 text-lg font-bold text-black md:text-xl">
              Privacy Policy
            </span>

            <h1 className="mt-8 max-w-4xl text-2xl font-extrabold leading-tight text-black sm:text-3xl md:text-4xl">
              Your privacy matters to us.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-black sm:text-xl">
              This Privacy Policy explains how Kucheza Gaming collects, uses,
              and protects your information when you play our games, visit our
              website, or participate in our educational programs.
            </p>

            <p className="mt-6 text-sm font-medium text-black">
              Last Updated: October 30, 2026
            </p>
          </div>
        </section>
      {/* Policy Content */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-20">
          {/* Table of Contents */}
          <aside className="h-fit lg:sticky lg:top-28">
            <h2 className="mb-5 text-lg font-bold text-black">
              Table of Contents
            </h2>

            <nav aria-label="Privacy policy contents">
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm leading-6 text-black underline decoration-transparent underline-offset-4 transition-colors hover:decoration-black"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Privacy Policy Text */}
          <article className="min-w-0">
            <p className={paragraphClass}>
              <strong>Kucheza Gaming</strong> (&quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;) is an indie game development studio based in
              Lagos, Nigeria. We are committed to respecting and protecting the
              privacy of our players, students, and users across all our games,
              platforms, and educational initiatives.
            </p>

            <p className={paragraphClass}>
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you play our games, visit our
              website, or participate in our educational school programs.
            </p>

            <section id="information-we-collect" className={sectionClass}>
              <h2 className={headingClass}>1. Information We Collect</h2>

              <p className={paragraphClass}>
                We collect information directly from you and automatically
                through your use of our games and services across various
                platforms, including Steam, iOS, Android, consoles, and TV OS.
              </p>

              <h3 className={subheadingClass}>
                Information You Provide Voluntarily
              </h3>

              <ul className={listClass}>
                <li>
                  <strong>Contact &amp; Account Data:</strong> Email addresses
                  collected when you sign up for our newsletters, customer
                  support, or educational programs.
                </li>
              </ul>

              <h3 className={subheadingClass}>
                Information Collected Automatically
              </h3>

              <ul className={listClass}>
                <li>
                  <strong>Gameplay Telemetry &amp; Analytics:</strong> In-game
                  interactions, feature usage, game progress, performance
                  metrics, and session duration.
                </li>
                <li>
                  <strong>Technical Data:</strong> Device identifiers, IP
                  addresses, crash logs, diagnostic reports, hardware
                  specifications, and operating system versions.
                </li>
              </ul>
            </section>

            <section id="third-party-services" className={sectionClass}>
              <h2 className={headingClass}>
                2. Third-Party Services &amp; Integrations
              </h2>

              <p className={paragraphClass}>
                To deliver, improve, and analyze our games, we integrate
                trusted third-party service providers:
              </p>

              <ul className={listClass}>
                <li>
                  <strong>Game Engines &amp; Analytics Platforms:</strong>{" "}
                  Unity Analytics, Unreal Engine, Google Analytics, and
                  Firebase, used to track telemetry, performance, and
                  application stability.
                </li>
                <li>
                  <strong>Platform &amp; Community Integrations:</strong> Steam
                  API and Discord, used for platform authentication, community
                  engagement, and social connectivity.
                </li>
              </ul>

              <p className={paragraphClass}>
                These third parties process data on our behalf according to
                their own privacy policies.
              </p>
            </section>

            <section id="in-app-purchases" className={sectionClass}>
              <h2 className={headingClass}>
                3. Monetization &amp; In-App Purchases
              </h2>

              <p className={paragraphClass}>
                Our games may offer <strong>In-App Purchases (IAPs).</strong>
              </p>

              <ul className={listClass}>
                <li>
                  All financial transactions are handled entirely by the
                  respective platform store, such as the Apple App Store,
                  Google Play Store, Steam, PlayStation Network, or Xbox Store.
                </li>
                <li>
                  <strong>
                    Kucheza Gaming does not store or process your credit card
                    or financial details.
                  </strong>{" "}
                  We only receive confirmation of purchase completion from the
                  platform provider.
                </li>
              </ul>
            </section>

            <section id="childrens-privacy" className={sectionClass}>
              <h2 className={headingClass}>
                4. Children&apos;s Privacy &amp; School Educational Programs
              </h2>

              <p className={paragraphClass}>
                Our games are generally rated for players aged{" "}
                <strong>7 and older.</strong> Additionally, we conduct training
                and educational activities with students in schools.
              </p>

              <h3 className={subheadingClass}>Educational Context</h3>

              <p className={paragraphClass}>
                When operating in school environments, we collect only the
                minimal data necessary to facilitate training activities,
                always in coordination with school administrators or
                parents/guardians.
              </p>

              <h3 className={subheadingClass}>
                Under-13 &amp; COPPA / Global Compliance
              </h3>

              <p className={paragraphClass}>
                We do not knowingly collect personally identifiable information
                (PII) from children under 13 without verifiable parental or
                school consent. If you believe we have inadvertently collected
                such information without proper authorization, please contact
                us immediately so we can promptly delete it.
              </p>
            </section>

            <section id="how-we-use-information" className={sectionClass}>
              <h2 className={headingClass}>
                5. How We Use Your Information
              </h2>

              <p className={paragraphClass}>
                We use the collected information to:
              </p>

              <ul className={listClass}>
                <li>
                  Deliver, maintain, and optimize gameplay performance across
                  supported platforms.
                </li>
                <li>Diagnose technical glitches and resolve system crashes.</li>
                <li>
                  Send newsletter updates and communications if you have opted
                  in.
                </li>
                <li>
                  Administer educational workshops and school training
                  sessions.
                </li>
                <li>
                  Ensure platform security and combat fraud or unauthorized
                  access.
                </li>
              </ul>
            </section>

            <section id="your-rights" className={sectionClass}>
              <h2 className={headingClass}>6. Your Rights &amp; Data Choices</h2>

              <p className={paragraphClass}>
                Depending on your location, you hold specific rights under
                applicable laws, including the <strong>NDPA / NDPR</strong> in
                Nigeria, <strong>GDPR</strong> in Europe, and{" "}
                <strong>CCPA</strong> in California:
              </p>

              <ul className={listClass}>
                <li>
                  <strong>Access &amp; Portability:</strong> Request a copy of
                  the personal data we hold about you.
                </li>
                <li>
                  <strong>Correction &amp; Erasure:</strong> Request the
                  correction or complete deletion of your personal data.
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing
                  newsletters at any time via the link in our emails, or manage
                  telemetry tracking via in-game privacy controls where
                  available.
                </li>
              </ul>

              <p className={paragraphClass}>
                To exercise any of these rights, contact us at the support
                email provided below.
              </p>
            </section>

            <section id="data-security" className={sectionClass}>
              <h2 className={headingClass}>7. Data Transfers &amp; Security</h2>

              <p className={paragraphClass}>
                As a studio based in Lagos, Nigeria, operating globally, your
                data may be processed on servers outside your home
                jurisdiction. We implement appropriate technical safeguards to
                maintain the confidentiality and security of your personal data
                wherever it resides.
              </p>
            </section>

            <section id="policy-changes" className={sectionClass}>
              <h2 className={headingClass}>8. Changes to This Policy</h2>

              <p className={paragraphClass}>
                We may update this Privacy Policy from time to time to reflect
                changes in our games, technology, or legal obligations. Updates
                will be posted on this page with an updated &quot;Last
                Updated&quot; date.
              </p>
            </section>

            <section id="contact-us" className={sectionClass}>
              <h2 className={headingClass}>9. Contact Us</h2>

              <p className={paragraphClass}>
                If you have questions, feedback, or requests regarding this
                Privacy Policy, please contact us at:
              </p>

              <div className="space-y-3 text-base leading-7 text-black">
                <p>
                  <strong>Kucheza Gaming</strong>
                </p>

                <p>
                  <strong>Location:</strong> Lagos, Nigeria
                </p>

                <p>
                  <strong>Support Email:</strong>{" "}
                  <a
                    href="mailto:gg@kuchezagaming.com"
                    className="underline underline-offset-4 hover:text-[#135F61]"
                  >
                    gg@kuchezagaming.com
                  </a>
                </p>
              </div>
            </section>

            <div className="pt-8">
              <Link
                href="/"
                className="inline-block rounded-md bg-[#24F2BE] px-6 py-3 text-base font-bold text-black transition-opacity hover:opacity-80"
              >
                Back to Home
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
