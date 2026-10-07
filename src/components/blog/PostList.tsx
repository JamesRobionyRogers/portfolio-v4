import Link from 'next/link'
import { TagList } from '@/components/ui/Tag'
import { PostDate } from '@/components/blog/PostDate'
import type { BlogPost } from '@/lib/mdx'

// Divided rows on ink: date on the left from `sm` up, title, description and tags on the right
const PostList = ({ posts }: { posts: BlogPost[] }) => (
    <ul className="flex flex-col border-t border-ink-raised">
        {posts.map((post) => (
            <li key={post.slug} className="border-b border-ink-raised">
                <Link
                    href={`/blog/${post.slug}`}
                    className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-6 lg:py-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                >
                    <PostDate date={post.date} className="text-ink-subtle sm:col-span-3 sm:pt-1" />
                    <div className="flex flex-col gap-3 sm:col-span-9">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-ink-fg group-hover:text-accent-on-ink transition-colors duration-200">
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
