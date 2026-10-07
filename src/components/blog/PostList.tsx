import Link from 'next/link'
import { TagList } from '@/components/ui/Tag'
import { PostDate } from '@/components/blog/PostDate'
import type { BlogPost } from '@/lib/mdx'

// Divided rows on ink: a narrow date column from `sm` up, then title, description and tags
const PostList = ({ posts }: { posts: BlogPost[] }) => (
    <ul className="flex flex-col border-t border-ink-raised">
        {posts.map((post) => (
            <li key={post.slug} className="border-b border-ink-raised">
                <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col sm:flex-row gap-2 sm:gap-6 py-6 lg:py-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                    <PostDate date={post.date} className="shrink-0 text-ink-subtle sm:w-40 sm:pt-1" />
                    <div className="flex min-w-0 flex-col gap-3">
                        <h2 className="text-xl lg:text-2xl font-semibold leading-tight text-ink-fg group-hover:text-accent-on-ink transition-colors duration-200">
                            {post.title}
                        </h2>
                        {post.description && (
                            <p className="max-w-prose text-base leading-relaxed text-ink-muted">{post.description}</p>
                        )}
                        {post.tags && post.tags.length > 0 && <TagList tags={post.tags} max={4} />}
                    </div>
                </Link>
            </li>
        ))}
    </ul>
)

export default PostList
