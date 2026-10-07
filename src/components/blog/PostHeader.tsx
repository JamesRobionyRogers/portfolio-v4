import Image from 'next/image'
import Link from 'next/link'
import { TagList } from '@/components/ui/Tag'
import { PostDate } from '@/components/blog/PostDate'
import type { BlogPost } from '@/lib/mdx'

// Breadcrumb, title, a date and tags row, then the cover image
const PostHeader = ({ post }: { post: BlogPost }) => (
    <header className="flex flex-col gap-6">
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-medium text-ink-subtle">
                <li className="shrink-0">
                    <Link
                        href="/blog"
                        className="inline-flex items-center min-h-11 hover:text-ink-fg underline-offset-4 hover:underline transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                    >
                        Blog
                    </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="min-w-0 truncate">{post.title}</li>
            </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight break-words text-ink-fg">
            {post.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <PostDate date={post.date} className="shrink-0 text-ink-subtle" />
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
