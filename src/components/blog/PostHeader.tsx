import Image from 'next/image'
import Link from 'next/link'
import { TagList } from '@/components/ui/Tag'
import { PostDate } from '@/components/blog/PostDate'
import type { BlogPost } from '@/lib/mdx'

// Back link, title, then a raised meta panel and cover image, like the project detail page
const PostHeader = ({ post }: { post: BlogPost }) => (
    <header className="flex flex-col gap-6 lg:gap-10">
        <Link
            href="/blog"
            className="inline-flex items-center gap-1 self-start min-h-11 font-semibold text-ink-subtle hover:text-ink-fg underline-offset-4 hover:underline transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
            <span aria-hidden="true">←</span> Blog
        </Link>

        <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight break-words text-ink-fg">
            {post.title}
        </h1>

        <div className="flex flex-col gap-6 bg-ink-raised rounded-2xl lg:rounded-3xl p-4 lg:p-6">
            <dl className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                <div className="flex flex-col gap-2 sm:col-span-3">
                    <dt className="text-sm sm:text-base font-semibold uppercase tracking-wide text-ink-subtle">Published</dt>
                    <dd><PostDate date={post.date} className="text-ink-fg" /></dd>
                </div>
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-col gap-2 sm:col-span-4">
                        <dt className="text-sm sm:text-base font-semibold uppercase tracking-wide text-ink-subtle">Tags</dt>
                        <dd><TagList tags={post.tags} variant="on-raised" /></dd>
                    </div>
                )}
                {post.description && (
                    <div className="flex flex-col gap-2 sm:col-span-5">
                        <dt className="text-sm sm:text-base font-semibold uppercase tracking-wide text-ink-subtle">Summary</dt>
                        <dd className="text-base leading-relaxed text-ink-fg">{post.description}</dd>
                    </div>
                )}
            </dl>

            {post.image && (
                <div className="relative aspect-video overflow-hidden rounded-lg lg:rounded-xl">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority
                        sizes="(min-width:1024px) 90rem, 100vw"
                        className="object-cover"
                    />
                </div>
            )}
        </div>
    </header>
)

export default PostHeader
