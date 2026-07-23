export default function Hero({
    image,
    alt = "",
}: {
    image: string;
    alt?: string;
}) {
    return (
        <section className="relative w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={image}
                alt={alt}
                className="block h-auto w-full"
            />
        </section>
    );
}