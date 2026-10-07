import Image from 'next/image'
import Link from 'next/link'
import { TagList } from '@/components/ui/Tag'
import { PostDate } from '@/components/blog/PostDate'
import type { BlogPost } from '@/lib/mdx'

// Ink panel holding the back link, title, meta and cover image, like the project detail shell
const PostHeader = ({ post }: { post: BlogPost }) => (
    <header className="flex flex-col gap-6 lg:gap-8 bg-ink rounded-2xl lg:rounded-3xl px-4 py-6 sm:p-8 lg:p-12">
        <Link
            href="/blog"
            className="inline-flex items-center gap-1 self-start min-h-11 font-semibold text-ink-subtle hover:text-ink-fg underline-offset-4 hover:underline transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
            <span aria-hidden="true">←</span> Blog
        </Link>

        <div className="flex flex-col gap-4">
            <PostDate date={post.date} className="text-ink-subtle" />
            <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight break-words text-ink-fg">
                {post.title}
            </h1>
            {post.description && (
                <p className="max-w-prose text-base sm:text-lg leading-relaxed text-ink-muted">{post.description}</p>
            )}
            {post.tags && post.tags.length > 0 && <TagList tags={post.tags} />}
        </div>

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
    </header>
)

export default PostHeader
