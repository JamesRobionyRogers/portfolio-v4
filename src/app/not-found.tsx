import Link from 'next/link'

export default function NotFound() {
    return (
        <section className="flex flex-col items-start gap-6 px-4 pt-28 pb-16 min-h-[60vh] lg:px-8">
            <h1 className="text-5xl font-bold uppercase sm:text-7xl">Page not found</h1>
            <p className="text-lg text-muted-foreground">That page doesn&apos;t exist or has moved.</p>
            <Link className="text-lg font-semibold underline underline-offset-4" href="/">Back to home →</Link>
        </section>
    )
}
