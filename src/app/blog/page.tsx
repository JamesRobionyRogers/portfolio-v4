import React from 'react';
import PostCard from '@/components/blog/PostCard';
import { getAllBlogPosts } from '@/lib/mdx';

export const metadata = {
    title: 'Blog',
    description: 'Read the latest blog posts about web development, React, and more.',
};

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 flex flex-col gap-8 lg:gap-12">
            <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight break-words text-fg">Blog</h1>

            {posts.length === 0 ? (
                <p className="text-base leading-relaxed text-fg">No posts yet. Check back soon.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {posts.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}
