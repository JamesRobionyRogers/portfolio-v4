import React from 'react';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/mdx';

export const metadata = {
    title: 'Blog',
    description: 'Read the latest blog posts about web development, React, and more.',
};

export default function BlogPage() {
    const posts = getAllBlogPosts();

    if (posts.length === 0) {
        return (
            <div className="min-h-screen px-4 lg:px-8 py-28">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Blog</h1>
                    <p className="text-neutral-600">No blog posts yet. Check back soon!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-4 lg:px-8 py-28">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Blog</h1>
                <div className="space-y-8">
                    {posts.map((post) => (
                        <article key={post.slug} className="border-b border-neutral-200 pb-8 last:border-0">
                            <Link href={`/blog/${post.slug}`} className="group">
                                <h2 className="text-2xl font-semibold mb-2 group-hover:text-green-500 transition-colors">
                                    {post.title}
                                </h2>
                            </Link>
                            <time className="text-sm text-neutral-500 mb-3 block">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                            {post.description && (
                                <p className="text-neutral-600 mb-4">{post.description}</p>
                            )}
                            {post.tags && post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-neutral-100 px-3 py-1 rounded-full text-neutral-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-block mt-4 text-green-500 hover:underline"
                            >
                                Read more →
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}