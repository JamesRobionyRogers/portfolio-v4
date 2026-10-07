import Link from 'next/link'
import { TagList } from '@/components/ui/Tag'
import { PostDate } from '@/components/blog/PostDate'
import type { BlogPost } from '@/lib/mdx'

// The whole card is the link, matching ProjectCard
const PostCard = ({ post }: { post: BlogPost }) => (
    <article>
        <Link
            href={`/blog/${post.slug}`}
            className="group flex h-full flex-col gap-4 bg-ink rounded-xl lg:rounded-2xl p-4 lg:p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
        >
            <div className="flex flex-col gap-2">
                <PostDate date={post.date} className="text-ink-subtle" />
                <h2 className="text-lg lg:text-xl font-semibold text-ink-fg group-hover:text-accent-on-ink transition-colors duration-200">
                    {post.title}
                </h2>
                {post.description && (
                    <p className="text-base leading-relaxed text-ink-muted line-clamp-3">{post.description}</p>
                )}
            </div>
            {post.tags && post.tags.length > 0 && <TagList tags={post.tags} max={3} className="mt-auto" />}
        </Link>
    </article>
)

export default PostCard
