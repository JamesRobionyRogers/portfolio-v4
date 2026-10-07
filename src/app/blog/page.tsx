import React from 'react';
import BlogShell from '@/components/blog/BlogShell';
import PostList from '@/components/blog/PostList';
import { getAllBlogPosts } from '@/lib/mdx';

export const metadata = {
    title: 'Blog',
    description: 'Read the latest blog posts about web development, React, and more.',
};

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <BlogShell>
            <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight break-words text-ink-fg">Blog</h1>

            {posts.length === 0 ? (
                <p className="text-base leading-relaxed text-ink-muted">No posts yet. Check back soon.</p>
            ) : (
                <PostList posts={posts} />
            )}
        </BlogShell>
    );
}
